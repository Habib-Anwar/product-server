import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const placeOrder = async (payload: Order) => {
  const result = await OrderModel.create(payload);
  return result;
};
const getOrder = async () => {
  const result = await OrderModel.find();
  return result;
};
const getOrderByEmail = async (email: string) => {
  const query = { email: email };
  const result = await OrderModel.findOne(query);
  return result;
};

export const OrderServices = {
  placeOrder,
  getOrder,
  getOrderByEmail,
};
