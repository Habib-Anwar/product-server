import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const placeOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.placeOrder(orderData);
    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Could not create order",
      error: error.message,
    });
  }
};
const getOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getOrder();
    res.status(201).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Could not find order",
      error: error.message,
    });
  }
};

const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email parameter is required",
      });
    }

    const orders = await OrderServices.getOrderByEmail(email);
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully for user email!",
      data: orders,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch orders!",
      error: err,
    });
  }
};

export const OrderController = {
  placeOrder,
  getOrder,
  getOrderByEmail,
};
