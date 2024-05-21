import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/products/product.route";
const app = express();

// parser
app.use(express.json());

// middleware
app.use("/api/products", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from other side!");
});

export default app;
