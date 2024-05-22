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
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const result = yield product_service_1.ProductServices.createProduct(productData);
    res.json({
        success: true,
        message: "Product created successfully",
        data: result,
    });
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchTerm = req.query.searchTerm;
    try {
        const products = yield product_service_1.ProductServices.getAllProducts(searchTerm);
        res.json({
            success: true,
            message: `Products matching search term '${searchTerm}' fetched successfully!`,
            data: products,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "An error occurred while searching for products.",
            error: error.message,
        });
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    const result = yield product_service_1.ProductServices.getProductById(productId);
    res.json({
        success: true,
        message: "Product fetched successfully",
        data: result,
    });
});
const updateProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    const updatedProduct = req.body;
    const result = yield product_service_1.ProductServices.updateProductById(productId, updatedProduct);
    res.json({
        success: true,
        message: "Product updated successfully",
        data: result,
    });
});
const deleteAProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = req.params.productId;
    const result = yield product_service_1.ProductServices.deleteAProduct(productId);
    res.json({
        success: true,
        message: "Product deleted successfully",
        data: result,
    });
});
exports.ProductController = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteAProduct,
};
