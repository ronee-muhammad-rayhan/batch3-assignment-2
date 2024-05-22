import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};

const retrieveAllOrders = async () => {
  const result = await Order.find({});
  return result;
};

export const OrderServices = {
  createOrder,
  retrieveAllOrders,
};
