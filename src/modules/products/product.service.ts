import TProduct, { TQuery } from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
const getAllProducts = async (searchTerm: TQuery) => {
  const result = await Product.find({
    $or: [
      { name: { $regex: searchTerm, $options: "i" } },
      { description: { $regex: searchTerm, $options: "i" } },
      { category: { $regex: searchTerm, $options: "i" } },
      { tags: { $regex: searchTerm, $options: "i" } },
    ],
  });
  //   const products = await Product.find();Í
  return result;
};

const getProductById = async (productId: string) => {
  const result = await Product.findOne({ _id: productId });
  return result;
};

const updateProductById = async (
  productId: string,
  updatedProduct: TProduct
) => {
  const result = await Product.findByIdAndUpdate(productId, updatedProduct, {
    new: true,
    upsert: false,
  });

  return result;
};

const deleteAProduct = async (productId: string) => {
  const result = await Product.deleteOne({ _id: productId });

  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteAProduct,
};
