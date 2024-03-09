import { Router } from "express";
import AuthRoutes from "./userRoutes.js";

const router = Router();

router.use("/api/auth", AuthRoutes);

export default router;