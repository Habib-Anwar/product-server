import { Product } from "./product.interface";
import { ProductModel } from "./product.model";
import slugify from "slugify";

const createProduct = async (payload: Product, searchTerm: string) => {
  //creating slug

  const slug = slugify(searchTerm || "iphone");
  const result = await ProductModel.create({ ...payload, slug });
  return result;
};
const getAllProducts = async () => {
  const result = await ProductModel.find();
  return result;
};
const getProductById = async (id: string) => {
  const result = await ProductModel.findById(id);
  return result;
};
const getProductBySlug = async (slug: string) => {
  const result = await ProductModel.findOne({ slug: String });
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
  getProductBySlug,
};
