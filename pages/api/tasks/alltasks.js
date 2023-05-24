import { CheckAuth } from "@/middlewares/CheckAuth";
import { Errors } from "@/middlewares/error";
import { TasksModel } from "@/models/Task";

const Alltasks = async (req, res) => {
  const user = await CheckAuth(req);
//   console.log(user._id, "________________");
  if (!user) return Errors(res, 401, "Please login First");
  const Todos = await TasksModel.find({ user: user._id });
//   console.log(Todos ," ___________________")
  res.status(201).json({
    success: true,
    Todos,
  });
};

export default Alltasks;
