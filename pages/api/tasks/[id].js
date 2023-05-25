import { DB } from "@/DB/DataBase";
import { CheckAuth } from "@/middlewares/CheckAuth";
import { Errors } from "@/middlewares/error";
import { TasksModel } from "@/models/Task";

const Tasks = async (req, res) => {
  await DB();
  const user = await CheckAuth(req);
  if (!user) return Errors(res, 401, "Please login First");
  const taskId = req.query.id;
  const IS = await TasksModel.findById(taskId);
  if (req.method === "PUT") {
    console.log(taskId);
    if (!IS) return Errors(res, 401, "Data doesn't exist");
    IS.isCompleted = !IS.isCompleted;
    await IS.save();
    console.log(IS, "--------------------------");
    res.status(201).json({
      success: true,
      IS,
    });
  } else if (req.method === "DELETE") {
    await IS.deleteOne();
    res.status(201).json({
      success: true,
      message: "Deleted Succesfully",
    });
  } else {
    Errors(res, 400, "This method is not allowed");
  }
};

export default Tasks;
