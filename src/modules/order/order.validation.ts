import { z } from "zod";

const orderSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  productId: z.string().nonempty({ message: "Product ID is required" }),
  price: z.number().min(0, { message: "Price must be non-negative" }),
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
});
