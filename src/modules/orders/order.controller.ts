import { Request, Response } from "express";
import { OrderServices } from "./order.service";
const createOrder = async (req: Request, res: Response) => {
  const orderData = req.body;
  try {
    const result = await OrderServices.createOrder(orderData);

    // console.log(result);

    if (result) {
      res.json({
        success: true,
        message: "Order placed successfully",
        data: result,
      });
    }else {
      res.json({
        success: false,
        message: `Order Failed due to insufficient stock`,
      });
    }
  } catch (error: any) {
    res.json({
      success: false,
      message: `Order Failed: ${error.message}`,
    });
  }


  // const orderData = req.body;
  // const result = await OrderServices.createOrder(orderData);

  // res.json({
  //   success: true,
  //   message: "Order placed successfully",
  //   data: result,
  // });
};
const retrieveAllOrders = async (req: Request, res: Response) => {
  // console.log(req.query);
  const queryEmail = req.query.email;

  try {
    const result = await OrderServices.retrieveAllOrders(queryEmail);

    // console.log(result);

    res.json({
      success: true,
      message: "Order placed successfully",
      data: result,
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: `Order reading Failed due to ${error.message}`,
    });
  }
};

export const OrderController = {
  createOrder,
  retrieveAllOrders,
};
