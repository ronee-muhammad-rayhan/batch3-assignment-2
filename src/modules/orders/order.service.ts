import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};

const retrieveAllOrders = async (queryEmail:any) => {
  if(queryEmail) {
    return await Order.find({email:queryEmail});
  }
  return await Order.find({});
  
};

export const OrderServices = {
  createOrder,
  retrieveAllOrders,
};
