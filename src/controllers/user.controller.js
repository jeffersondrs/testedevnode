import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";

const sign_token = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

export const signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create(req.body);

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  res.status(201).json({
    status: "success",
    token,
    data: {
      user: newUser,
    },
  });
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  const correctUser = await user.correctPassword(password, user.password);

  if (!user || !correctUser) {
    return next(new AppError("Incorrect email or password", 401));
  }

  const token = sign_token(user._id);

  res.status(200).json({
    status: "success",
    token,
  });
});
