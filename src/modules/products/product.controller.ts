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

const updateProductById = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const updatedProduct = req.body;
  const result = await ProductServices.updateProductById(
    productId,
    updatedProduct
  );

  res.json({
    success: true,
    message: "Product updated successfully",
    data: result,
  });
};

const deleteAProduct = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const result = await ProductServices.deleteAProduct(productId);

  res.json({
    success: true,
    message: "Product deleted successfully",
    data: result,
  });
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteAProduct,
};
