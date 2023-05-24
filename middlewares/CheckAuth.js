import { UsersModel } from "@/models/users";
import jwt from "jsonwebtoken";
export const CheckAuth = async (req) => {
  const cookie = req.headers.cookie;
  if (!cookie) return null;
  const token = cookie.split("=")[1];
  const Decode = jwt.verify(token, "fdhdguibsjgdjd");
  return await UsersModel.findById(Decode._id);
};
