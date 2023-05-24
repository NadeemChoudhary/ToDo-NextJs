import { CookieSetter } from "@/middlewares/cookie";
import { Errors } from "@/middlewares/error";
const Logout = async (req, res) => {
  if (req.method !== "GET") return Errors(res, 400, "Only GET Method Allowed");
  CookieSetter(res, null, false);

  res.status(200).json({
    success: true,
    message: `Logout Successfully`,
  });
};

export default Logout;
