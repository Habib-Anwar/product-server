import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/", OrderController.placeOrder);
router.get("/", OrderController.getOrder);
router.get("/:email", OrderController.getOrderByEmail);

export const OrderRoutes = router;
