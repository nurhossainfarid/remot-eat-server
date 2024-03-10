import { Router } from "express";
import { createFood, createFoodPackage, deleteFood, deleteFoodPackage, getAllFood, getAllFoodPackage, getFoodById, getFoodPackageById, updateFood, updateFoodPackage } from "../Controllers/FoodController.js";

const router = Router();

router.post('/', createFood);
router.get('/', getAllFood);
router.get('/:id', getFoodById);
router.patch('/:id', updateFood)
router.delete('/:id', deleteFood);
router.post('/', createFoodPackage);
router.get('/', getAllFoodPackage);
router.get('/:id', getFoodPackageById);
router.patch('/:id', updateFoodPackage)
router.delete('/:id', deleteFoodPackage);


export default router;