import express from "express";
import { protect, checkAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/productController.js";
router.route("/").get(getProducts).post(protect, checkAdmin, createProduct);

router
  .route("/:id")
  .get(getProductById)
  .delete(protect, checkAdmin, deleteProduct)
  .put(protect, checkAdmin, updateProduct);

export default router;
