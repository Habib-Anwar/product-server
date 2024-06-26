import { Schema, model } from "mongoose";
import { Product, Variants } from "./product.interface";

const variantSchema = new Schema<Variants>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [variantSchema], required: true },
  inventory: {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  slug: { type: String, required: true },
});

// Query Middleware
productSchema.pre("find", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
productSchema.pre("findOne", function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const ProductModel = model<Product>("ProductModel", productSchema);

// module.exports = Product;
