import  express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/", ProductController.createProduct);
router.get("/", ProductController.getAllProducts);
router.get("/", ProductController.getAllProducts);
router.put("/:productId", ProductController.updateProductById);

export const ProductRoutes = router;