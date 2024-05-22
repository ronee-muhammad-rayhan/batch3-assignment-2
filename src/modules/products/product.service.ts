import TProduct from "./product.interface";
import { Product } from "./product.model";

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};
const getAllProducts = async () => {
  const result = await Product.find();
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

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
};
