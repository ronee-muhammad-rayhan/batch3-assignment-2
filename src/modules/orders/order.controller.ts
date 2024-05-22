import { Request, Response } from "express";
import { OrderServices } from "./order.service";
const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await OrderServices.createOrder(productData);

  res.json({
    success: true,
    message: "Order placed successfully",
    data: result,
  });
};

export const OrderController = {
  createProduct,
};
