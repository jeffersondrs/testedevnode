import Product from "../models/productModel.js";
import mongoose from "mongoose";
import catchAsync from "../utils/catchAsync.js";

export const getProducts = catchAsync(async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export const getProductById = catchAsync(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export const createProduct = catchAsync(async (req, res) => {
  const { name, qty, price, categories } = req.body;
  try {
    const categoryIds = categories.map(
      (categoryId) => new mongoose.Types.ObjectId(categoryId)
    );

    const product = await Product.create({
      name,
      qty,
      price,
      categories: categoryIds,
    });

    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export const updateProduct = catchAsync(async (req, res) => {
  try {
    const id = req.params.id;
    const produto = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!produto) {
      return res.status(404).send({ error: "Product not found" });
    }

    res.send(produto);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error updating product" });
  }
});

export const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }
    return res.json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
