import { Router } from "express";
import { createOrder, deleteOrder, getAllOrder, getOrderById, updateOrder } from "../Controllers/OrderController.js";


const router = Router();

router.post('/', createOrder);
router.get('/', getAllOrder);
router.get('/:id', getOrderById);
router.patch('/:id', updateOrder)
router.delete('/:id', deleteOrder);


export default router;