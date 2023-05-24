import jwt from "jsonwebtoken";

export const TokenGenerate = ({ _id }) => {
  return jwt.sign({_id}, "fdhdguibsjgdjd");
};
  