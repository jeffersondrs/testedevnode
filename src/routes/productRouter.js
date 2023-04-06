import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import verifyToken from "../utils/verifyToken.js";

const router = express.Router();

router.get("/product", verifyToken, getProducts);

router.get("/product/:id", verifyToken,getProductById);

router.post("/product", verifyToken, createProduct);

router.patch("/product/:id", verifyToken, updateProduct);

router.delete("/product/:id", verifyToken, deleteProduct);



export { router };
