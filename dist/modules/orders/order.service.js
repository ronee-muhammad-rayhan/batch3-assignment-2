"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const product_model_1 = require("../products/product.model");
const order_model_1 = __importDefault(require("./order.model"));
const createOrder = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(payload);
    var _a, _b;
    const productId = payload.productId;
    const productOld = yield product_model_1.Product.findOne({ _id: productId });
    // console.log(productOld);
    if (((_a = productOld === null || productOld === void 0 ? void 0 : productOld.inventory) === null || _a === void 0 ? void 0 : _a.inStock) &&
        ((_b = productOld === null || productOld === void 0 ? void 0 : productOld.inventory) === null || _b === void 0 ? void 0 : _b.quantity) - (payload === null || payload === void 0 ? void 0 : payload.quantity) >= 0) {
        const newQuantity = productOld.inventory.quantity - payload.quantity;
        console.log(newQuantity);
        const result = yield order_model_1.default.create(payload);
        yield product_model_1.Product.findByIdAndUpdate(productId, {
            "inventory.quantity": newQuantity,
            "inventory.inStock": !(newQuantity === 0),
        });
        return result;
    }
    else {
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
});
const retrieveAllOrders = (queryEmail) => __awaiter(void 0, void 0, void 0, function* () {
    if (queryEmail) {
        return yield order_model_1.default.find({ email: queryEmail });
    }
    return yield order_model_1.default.find({});
});
exports.OrderServices = {
    createOrder,
    retrieveAllOrders,
};
