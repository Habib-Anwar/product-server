import express, { Request, Response } from "express";
import { productController } from "./product.controller";

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:productId", productController.getProductById);
router.get("/:slug", productController.getProductBySlug);
router.delete("/:productId", productController.hardDeleteProductById);

export const ProductRoutes = router;
