import express from "express";
import { protect, checkAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

import {
  authUser,
  getUserProfile,
  getUsers,
  registerUser,
  updateUserProfile,
} from "../controllers/userController.js";

router.route("/").post(registerUser).get(protect, checkAdmin, getUsers);
router.post("/login", authUser);

router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
