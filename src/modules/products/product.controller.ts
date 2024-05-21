import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const searchTerm = req.body.searchTerm || productData.name;
  console.log(searchTerm);
  const result = await ProductServices.createProduct(productData, searchTerm);
  res.json({
    success: true,
    message: "Product is created successfully",
    data: result,
  });
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProducts();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch products !",
      error: err,
    });
  }
};
const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getProductById(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch product !",
      error: err,
    });
  }
};
const getProductBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await ProductServices.getProductBySlug(slug);
    res.status(200).json({
      success: true,
      message: "Products matching search term 'iphone' fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch product !",
      error: err,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getProductById,
  getProductBySlug,
};
