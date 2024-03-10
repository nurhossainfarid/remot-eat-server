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
            status: 200,
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
    const foods = await prisma.food.findMany({});
    return res.json({
        status: 200,
        data: foods,
        message: "All food get successfully"
    })
}

// Get food by id
export const getFoodById = async (req, res) => {
    const foodId = req.params.id;
    const food = await prisma.food.findFirst({
        where: {
            id: Number(foodId)
        }
    })

    return res.json({
        status: 200,
        data: food,
        message: "See food successfully"
    })
}

// update food by id
export const updateFood = async (req, res) => {
    const foodId = req.params.id;   
    const {shop_id, food_name, description, price, quantity, rating, food_image, discount} = req.body;

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

    return res.json({
        status: 200,
        data: updateData,
        message: "Update food successfully"
    })
}

// delete food by id
export const deleteFood = async (req, res) => {
    const foodId = req.params.id;

    await prisma.food.delete({
        where: {
            id: Number(foodId)
        }
    });

    return res.json({
        status: 200,
        message: 'food delete successfully'
    })
}

/*                                        Food Package                              */

// Create Food Package
export const createFoodPackage = async (req, res) => {
    const {shop_id, food_name, description, total_price, quantity, rating, food_image, discount} = req.body;
    try {
        const newFoodPackage = await prisma.foods.create({
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
        });
    
        res.status(200).json({
            status: 200,
            message: 'Food Add successfully',
            data: newFoodPackage
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
export const getAllFoodPackage = async (req, res) => {
    const foodPackages = await prisma.foods.findMany({});
    return res.json({
        status: 200,
        data: foodPackages,
        message: "All food package get successfully"
    })
}

// Get food by id
export const getFoodPackageById = async (req, res) => {
    const foodId = req.params.id;
    const food = await prisma.food.findFirst({
        where: {
            id: Number(foodId)
        }
    })

    return res.json({
        status: 200,
        data: food,
        message: "See food package successfully"
    })
}

// update food by id
export const updateFoodPackage = async (req, res) => {
    const foodId = req.params.id;   
    const {shop_id, food_name, description, total_price, quantity, rating, food_image, discount} = req.body;

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

    return res.json({
        status: 200,
        data: updateData,
        message: "Update food package successfully"
    })
}

// delete food by id
export const deleteFoodPackage = async (req, res) => {
    const foodId = req.params.id;

    await prisma.food.delete({
        where: {
            id: Number(foodId)
        }
    });

    return res.json({
        status: 200,
        message: 'food package delete successfully'
    })
}