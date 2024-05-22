import { Product } from "../products/product.model";
import { TOrder } from "./order.interface";
import Order from "./order.model";

const createOrder = async (payload: TOrder) => {
  // console.log(payload);

  const productId = payload.productId;

  const productOld = await Product.findOne({ _id: productId });

  // console.log(productOld);

  if (
    productOld?.inventory?.inStock &&
    productOld?.inventory?.quantity - payload?.quantity >= 0
  ) {
    const newQuantity = productOld.inventory.quantity - payload.quantity;
    console.log(newQuantity);
    const result = await Order.create(payload);
    await Product.findByIdAndUpdate(productId, {
      "inventory.quantity": newQuantity,
      "inventory.inStock": !(newQuantity === 0),
    });
    return result;
  } else {
    // return new Error;
    return;
  }

  // if(productOld?.inventory?.inStock && productOld?.inventory?.quantity-payload?.quantity>=0) {
  //   const price = productOld.price * payload.quantity;
  //   const result = await Order.create({
  //    ...payload,
  //     price,
  //   });
  //   await Product.findByIdAndUpdate(productId, {"inventory.quantity": productOld?.inventory?.quantity-payload?.quantity});
  //   return result;
  // }

  // if (!productOld) {
  //   throw new Error("Product not found");
  // } else {

  // await Product.findByIdAndUpdate(productId, {"inventory.quantity": payload.quantity});
  // const productNew = await Product.findOne({ _id: productId });

  // const productNew = await Product.findOne({ _id: productId });
  // const price = productOld.price * payload.quantity;
  // const result = await Order.create({
  //  ...payload,
  //   price,
  // });
  // return result;

  // const result = await Order.create(payload);

  // return result;
};

const retrieveAllOrders = async (queryEmail: any) => {
  if (queryEmail) {
    return await Order.find({ email: queryEmail });
  }
  return await Order.find({});
};

export const OrderServices = {
  createOrder,
  retrieveAllOrders,
};
