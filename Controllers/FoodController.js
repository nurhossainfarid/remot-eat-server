import prisma from "../DB/db.config.js";

// Create food
export const createFood = async (req, res) => {
    const {shop_id, food_name, description, price, quantity, rating, food_image, discount} = req.body;
    try {
        const newFood = await prisma.food.create({
            data: {
                shop_id,
                food_name,
                description,
                price,
                quantity,
                rating,
                food_image,
                discount
            }
        });
    
        res.status(200).json({
            status: 'success',
            message: 'Food Add successfully',
            data: newFood
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Food could not add successfully",
            error: error.message
        })
    }
}

// Get all foods
export const getAllFood = async (req, res) => {
    try {
        const foods = await prisma.food.findMany({});
        res.status(200).json({
            status: 'success',
            data: foods,
            message: "All food get successfully"
        }) 
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Food could not get successfully",
            error: error.message
        }) 
    }
}

// Get food by id
export const getFoodById = async (req, res) => {
    try {
        const foodId = req.params.id;
        const food = await prisma.food.findFirst({
            where: {
                id: Number(foodId)
            }
        })
    
        res.status(200).json({
            status: 'success',
            data: food,
            message: "See food successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Food could not get successfully",
            error: error.message
        })
    }
}

// update food by id
export const updateFood = async (req, res) => {
    try {
        const foodId = req.params.id;   
        const {shop_id, food_name, description, price, quantity, rating, food_image, 
            discount} = req.body;
    
        const updateData = await prisma.food.update({
            where: {
                id: Number(foodId)
            },
            data: {
                shop_id,
                food_name,
                description,
                price,
                quantity,
                rating,
                food_image,
                discount
            }
        })
    
        res.status(200).json({
            status: 'success',
            data: updateData,
            message: "Update food successfully"
        })
        
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Food could not update successfully",
            error: error.message
        })
    }
}

// delete food by id
export const deleteFood = async (req, res) => {
    try {
        const foodId = req.params.id;
    
        await prisma.food.delete({
            where: {
                id: Number(foodId)
            }
        });
    
        res.status(200).json({
            status: 'success',
            message: 'food delete successfully'
        })
        
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Food could not delete successfully",
            error: error.message
        })
    }
}

/*                                        Food Package                              */

// Create Food Package
export const createFoodPackage = async (req, res) => {
    const {shop_id, food_name, description, price, quantity, rating, food_image, discount} = req.body;
    try {
        const newFoodPackage = await prisma.foods.create({
            data: {
                shop_id,
                food_name,
                description,
                price,
                quantity,
                rating,
                food_image,
                discount
            }
        });
    
        res.status(200).json({
            status: 'success',
            message: 'Food package Add successfully',
            data: newFoodPackage
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Food package could not add successfully",
            error: error.message
        })
    }
}

// Get all foods
export const getAllFoodPackage = async (req, res) => {
    try {
        const foodPackages = await prisma.foods.findMany({});
        res.status(200).json({
            status: 'success',
            data: foodPackages,
            message: "All food package get successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Food package could not get successfully",
            error: error.message
        })
    }
}

// Get food by id
export const getFoodPackageById = async (req, res) => {
    try {
        const foodId = req.params.id;
        const food = await prisma.food.findFirst({
            where: {
                id: Number(foodId)
            }
        })
    
        res.status(200).json({
            status: 'success',
            data: food,
            message: "See food package successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Food package could not get successfully",
            error: error.message
        })
    }
}

// update food by id
export const updateFoodPackage = async (req, res) => {
    try {
        const foodId = req.params.id;   
        const {shop_id, food_name, description, total_price, quantity, rating, 
            food_image, discount} = req.body;
        const updateData = await prisma.food.update({
            where: {
                id: Number(foodId)
            },
            data: {
                shop_id,
                food_name,
                description,
                total_price,
                quantity,
                rating,
                food_image,
                discount
            }
        })
    
        res.status(200).json({
            status: 'success',
            data: updateData,
            message: "Update food package successfully"
        })
        
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Food package could not update successfully",
            error: error.message
        })
    }
}

// delete food by id
export const deleteFoodPackage = async (req, res) => {
    try {
        const foodId = req.params.id;
    
        await prisma.food.delete({
            where: {
                id: Number(foodId)
            }
        });
    
        res.status(200).json({
            status: 'success',
            message: 'food package delete successfully'
        })
        
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Food package could not delete successfully",
            error: error.message
        })
    }
}