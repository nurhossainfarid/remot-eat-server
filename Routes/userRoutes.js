import { Router } from "express";
import { deleteUser, getAllUser, getMe, getUserById, login, registerUser, updateUser } from "../Controllers/AuthController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router();

router.post('/register', registerUser)
router.post('/login', login);
router.get('/me', verifyToken, getMe)
router.get('/all', getAllUser);
router.get('/:id', getUserById);
router.patch('/:id', updateUser)
router.delete('/:id', deleteUser);

export default router;