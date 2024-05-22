import { z } from "zod";

const variantSchema = z.object({
  type: z.string().nonempty({ message: "Type is required" }),
  value: z.string().nonempty({ message: "Value is required" }),
});

const productSchema = z.object({
  name: z.string().nonempty({ message: "Name is required" }),
  description: z.string().nonempty({ message: "Description is required" }),
  price: z.number().nonnegative({ message: "Price must be non-negative" }),
  category: z.string().nonempty({ message: "Category is required" }),
  tags: z
    .array(z.string().nonempty())
    .nonempty({ message: "Tags are required" }),
  variants: z
    .array(variantSchema)
    .nonempty({ message: "Variants are required" }),
  inventory: z.object({
    quantity: z
      .number()
      .int()
      .nonnegative({ message: "Quantity must be a non-negative integer" }),
    inStock: z.boolean(),
  }),
  isDeleted: z.boolean().default(false),
});
