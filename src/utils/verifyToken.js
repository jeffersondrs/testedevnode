import jwt from "jsonwebtoken";
import { promisify } from "util";
import User from "../models/userModel.js";
import catchAsync from "../utils/catchAsync.js";

const verifyToken = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError(
        "Você não está logado! Por favor, faça login para continuar.",
        401
      )
    );
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(decoded.id);

  next();
});

export default verifyToken;
