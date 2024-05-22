import { Request, Response } from "express";
import { OrderServices } from "./order.service";
const createOrder = async (req: Request, res: Response) => {
  const orderData = req.body;
  const result = await OrderServices.createOrder(orderData);

  res.json({
    success: true,
    message: "Order placed successfully",
    data: result,
  });
};
const retrieveAllOrders = async (req: Request, res: Response) => {
  // console.log(req.query);
  const queryEmail = req.query.email;
  const result = await OrderServices.retrieveAllOrders(queryEmail);

  res.json({
    success: true,
    message: "Order placed successfully",
    data: result,
  });
};

export const OrderController = {
  createOrder,
  retrieveAllOrders,
};
