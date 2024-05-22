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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = req.body;
    try {
        const result = yield order_service_1.OrderServices.createOrder(orderData);
        // console.log(result);
        if (result) {
            res.json({
                success: true,
                message: "Order placed successfully",
                data: result,
            });
        }
        else {
            res.json({
                success: false,
                message: `Order Failed due to insufficient stock`,
            });
        }
    }
    catch (error) {
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
});
const retrieveAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(req.query);
    const queryEmail = req.query.email;
    try {
        const result = yield order_service_1.OrderServices.retrieveAllOrders(queryEmail);
        // console.log(result);
        res.json({
            success: true,
            message: "Order placed successfully",
            data: result,
        });
    }
    catch (error) {
        res.json({
            success: false,
            message: `Order reading Failed due to ${error.message}`,
        });
    }
});
exports.OrderController = {
    createOrder,
    retrieveAllOrders,
};
