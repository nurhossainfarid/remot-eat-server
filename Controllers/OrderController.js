import prisma from "../DB/db.config.js";

// Create order
export const createOrder = async (req, res) => {
    try {
        const {user_id, shop_id, food_items, description, total_price, order_status, 
            payment_status, picked} = req.body;
        const newOrder = await prisma.order.create({
            data: {
                user_id,
                shop_id,
                food_items,
                description,
                total_price,
                order_status,
                payment_status,
                picked
            }
        });
    
        res.status(200).json({
            status: 'success',
            message: 'order Add successfully',
            data: newOrder
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "order could not add successfully",
            error: error.message
        })
    }
}

// Get all orders
export const getAllOrder = async (req, res) => {
    try {
        const order = await prisma.order.findMany({});
        res.status(200).json({
            status: 'success',
            data: order,
            message: "All order successfully"
        })
        
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Order could not get successfully",
            error: error.message
        })
    }
}

// Get order by id
export const getOrderById = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await prisma.order.findFirst({
            where: {
                id: Number(orderId)
            }
        })
    
        res.status(200).json({
            status: 'success',
            data: order,
            message: "See order successfully"
        }) 
        
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Order could not get successfully",
            error: error.message
        })
    }
}

// update order by id
export const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.id;   
        const { user_id, shop_id, food_items, description, total_price, order_status, 
            payment_status, picked } = req.body;
    
        const updateData = await prisma.order.update({
            where: {
                id: Number(orderId)
            },
            data: {
                user_id,
                shop_id,
                food_items,
                description,
                total_price,
                order_status,
                payment_status,
                picked
            }
        })
    
        res.status(200).json({
            status: 'success',
            data: updateData,
            message: "Update order successfully"
        })
        
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Order could not update successfully",
            error: error.message
        })
    }
}

// delete order by id
export const deleteOrder = async (req, res) => {
    
    try {
        const orderId = req.params.id;

        await prisma.order.delete({
            where: {
                id: Number(orderId)
            }
        });
    
        res.status(200).json({
            status: 'success',
            message: 'order delete successfully'
        })
        
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Order could not delete successfully",
            error: error.message
        })
    }
}