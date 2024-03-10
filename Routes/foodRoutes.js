import { Router } from "express";
import { createFood, createFoodPackage, deleteFood, deleteFoodPackage, getAllFood, getAllFoodPackage, getFoodById, getFoodPackageById, updateFood, updateFoodPackage } from "../Controllers/FoodController.js";

const router = Router();

router.post('/single', createFood);
router.get('/single', getAllFood);
router.get('/single/:id', getFoodById);
router.patch('/single/:id', updateFood)
router.delete('/single/:id', deleteFood);
router.post('/package', createFoodPackage);
router.get('/package', getAllFoodPackage);
router.get('/package:id', getFoodPackageById);
router.patch('/package:id', updateFoodPackage)
router.delete('/package:id', deleteFoodPackage);


export default router;