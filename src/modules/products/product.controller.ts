import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductServices.createProduct(productData);

  res.json({
    success: true,
    message: "Product created successfully",
    data: result,
  });
};

const getAllProducts = async (req: Request, res: Response) => {
  const result = await ProductServices.getAllProducts();

  res.json({
    success: true,
    message: "Product fetched successfully",
    data: result,
  });
};

const getProductById = async (req: Request, res: Response) => {
    const productId = req.params.productId;
  const result = await ProductServices.getProductById(productId);

  res.json({
    success: true,
    message: "Product fetched successfully",
    data: result,
  });
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
};
