import { DB } from "@/DB/DataBase";
import { CookieSetter } from "@/middlewares/cookie";
import { Errors } from "@/middlewares/error";
import { TokenGenerate } from "@/middlewares/token";
import { UsersModel } from "@/models/users";
import bcrypt from "bcrypt";
const Login = async (req, res) => {
  await DB();
  if (req.method !== "POST")
    return Errors(res, 400, "Only POST Method Allowed");
  const { email, password } = req.body;
  console.log(email , password , "passssssss")
  if (!email || !password) return Errors(res, 401, "Empty Field Found");
  const user = await UsersModel.findOne({email} ).select("+password");
  console.log(user , "____________________")
  if (!user) return Errors(res, 401, "Please Register Yourself");
  const Ismatch = await bcrypt.compare(password, user.password);
  if (!Ismatch) return Errors(res, 401, "Invalid Email or Password");
  const token = TokenGenerate(user);
  CookieSetter(res, token, true);

  res.status(200).json({
    success: true,
    message: `Welocom Back ${user.name}`,
  });
};

export default Login;
