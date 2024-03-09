import { Router } from "express";
import { getMe, login, registerUser } from "../Controllers/AuthController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.post('/register', registerUser)
router.post('/login', login);
router.get('/me',verifyToken, getMe)

export default router;