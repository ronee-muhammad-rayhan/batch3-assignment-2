import  express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/", ProductController.createProduct);
router.get("/", ProductController.getAllProducts);
router.get("/:productId", ProductController.getProductById);
router.put("/:productId", ProductController.updateProductById);
router.delete("/:productId", ProductController.deleteAProduct);

export const ProductRoutes = router;