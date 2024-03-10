import { Router } from "express";
import AuthRoutes from "./userRoutes.js";
import ShopRoutes from "./shopRoutes.js";
import OrderRoutes from "./orderRoutes.js";
import FoodRoutes from "./foodRoutes.js";

const router = Router();

router.use("/api/v1/auth", AuthRoutes);
router.use("/api/v1/shop", ShopRoutes);
router.use("/api/v1/order", OrderRoutes);
router.use("/api/v1/food", FoodRoutes);

export default router;