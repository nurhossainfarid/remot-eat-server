import { Router } from "express";
import { createShop, deleteShop, getAllShop, getShopById, updateShop } from "../Controllers/ShopController.js";

const router = Router();

router.post('/', createShop);
router.get('/', getAllShop);
router.get('/:id', getShopById);
router.patch('/:id', updateShop)
router.delete('/:id', deleteShop);


export default router;