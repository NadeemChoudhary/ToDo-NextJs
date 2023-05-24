import { DB } from "@/DB/DataBase";
import { CookieSetter } from "@/middlewares/cookie";
import { Errors } from "@/middlewares/error";
import { TokenGenerate } from "@/middlewares/token";
import { UsersModel } from "@/models/users";
import bcrypt from "bcrypt";
const register = async (req, res) => {
  if (req.method !== "POST")
    return Errors(res, 400, "Only POST Method Allowed");
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return Errors(res, 401, "Empty Field Found");
  let user = await UsersModel.findOne({ email });
  console.log(user, "-------------------");
  if (user) return Errors(res, 400, "already register");
  const Cryptpass = await bcrypt.hash(password, 10);
  await DB();
  user = await UsersModel.create({
    name,
    email,
    password: Cryptpass,
  });

  const token = TokenGenerate(user);

  CookieSetter(res, token, true);

  res.status(201).json({
    success: true,
    message: "User Created Succesfully",
  });
};

export default register;
