import express from "express";
import { getCategories } from "../controllers/category.controller.js";
const categoryRoutes = express.Router();

categoryRoutes.get("/", getCategories);

export { categoryRoutes };
