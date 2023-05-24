import { DB } from "@/DB/DataBase";
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
  await TasksModel.create({
    title,
    description,
    user: new mongoose.Types.ObjectId("646c500a339c7652c40135b6"),
  }).then((result) => {
    res.status(201).json({
      success: true,
      message: "Task Added Succesfully",
    });
  });
};

export default newtask;
