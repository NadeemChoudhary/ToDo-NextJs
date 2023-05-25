import { DB } from "@/DB/DataBase";
import { CheckAuth } from "@/middlewares/CheckAuth";
import { Errors } from "@/middlewares/error";
import { TasksModel } from "@/models/Task";
import mongoose from "mongoose";

const newtask = async (req, res) => {
  if (req.method !== "POST")
    return res.status(400).json({
      success: false,
      message: "Only POST Method Allowed",
    });
  const { title, description } = req.body;
  await DB();
  const user = await CheckAuth(req);
  if (!user) return Errors(res, 401, "Please login First");
  await TasksModel.create({
    title,
    description,
    user: user._id,
  }).then((result) => {
    res.status(201).json({
      success: true,
      message: "Task Added Succesfully",
    });
  });
};

export default newtask;
