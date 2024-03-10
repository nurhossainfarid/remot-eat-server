import prisma from "../DB/db.config.js";

// Create Shop
export const createShop = async (req, res) => {
    const {user_id, shop_name, shop_address, shop_phone, shop_image, open_time, ending_time} = req.body;
    try {
        // const findShop = await prisma.shop.findUnique({
        //     where: {
        //         shop_name: shop_name,
        //     }
        // })
    
        // if (findShop) {
        //     return res.json({
        //         status: 400,
        //         message: 'This shop name Already Taken. Please try again another way'
        //     })
        // }

        const newShop = await prisma.shop.create({
            data: {
                user_id,
                shop_name,
                shop_address,
                shop_phone,
                shop_image,
                open_time,
                ending_time
            }
        });
    
        res.status(200).json({
            status: 200,
            message: 'Shop Add successfully',
            data: newShop
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Shop could not add successfully",
            error: error.message
        })
    }
}

// Get all shops
export const getAllShop = async (req, res) => {
    try {
        const shop = await prisma.shop.findMany({});
        res.status(200).json({
            status: 'Success',
            data: shop,
            message: "All shop successfully"
        })  
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Shop could not add successfully",
            error: error.message
        })
    }
}

// Get shop by id
export const getShopById = async (req, res) => {
    
    try {
        const shopId = req.params.id;
        const shop = await prisma.shop.findFirst({
            where: {
                id: Number(shopId)
            }
        })
    
        res.status(200).json({
            status: "success",
            data: shop,
            message: "See shop successfully"
        })
        
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Shop could not add successfully",
            error: error.message
        })
    }
}

// update shop by id
export const updateShop = async (req, res) => {
    
    try {
        const shopId = req.params.id;   
        const { user_id, shop_name, shop_address, shop_phone, shop_image, open_time, 
            ending_time } = req.body;
    
        const updateData = await prisma.shop.update({
            where: {
                id: Number(shopId)
            },
            data: {
                user_id,
                shop_name,
                shop_address,
                shop_phone,
                shop_image,
                open_time,
                ending_time
            }
        })
    
        res.status(200).json({
            status: 'success',
            data: updateData,
            message: "Update shop successfully"
        })
        
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Shop could not add successfully",
            error: error.message
        })
    }
}

// delete shop by id
export const deleteShop = async (req, res) => {
    const shopId = req.params.id;
    await prisma.shop.delete({
        where: {
            id: Number(shopId)
        }
    });

    return res.json({
        status: 200,
        message: 'shop delete successfully'
    })

    try {
        
    } catch (error) {
        
    }
}