import prisma from "../DB/db.config.js";

// Create order
export const createOrder = async (req, res) => {
    const {user_id, shop_id, food_items, description, total_price, order_status, payment_status, picked} = req.body;
    try {
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
            status: 200,
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
    const order = await prisma.order.findMany({});
    return res.json({
        status: 200,
        data: order,
        message: "All order successfully"
    })
}

// Get order by id
export const getOrderById = async (req, res) => {
    const orderId = req.params.id;
    const order = await prisma.order.findFirst({
        where: {
            id: Number(orderId)
        }
    })

    return res.json({
        status: 200,
        data: order,
        message: "See order successfully"
    })
}

// update order by id
export const updateOrder = async (req, res) => {
    const orderId = req.params.id;   
    const { user_id, shop_id, food_items, description, total_price, order_status, payment_status, picked } = req.body;

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

    return res.json({
        status: 200,
        data: updateData,
        message: "Update order successfully"
    })
}

// delete order by id
export const deleteOrder = async (req, res) => {
    const orderId = req.params.id;

    await prisma.order.delete({
        where: {
            id: Number(orderId)
        }
    });

    return res.json({
        status: 200,
        message: 'order delete successfully'
    })
}