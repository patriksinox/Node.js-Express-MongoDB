import express from "express";

import {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { keyControl } from "../controllers/apiKey.controller.js";

const router = express.Router();

//Get ALL products + Chránená s api Kĺúčom
router.get("/", keyControl, getAllProducts);

//Get ONE product
router.get("/:id", getOneProduct);

//Create one product
router.post("/", createProduct);

//Update product
router.put("/:id", updateProduct);

//Product delete
router.delete("/:id", deleteProduct);

export default router;
