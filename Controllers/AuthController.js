import prisma from "../DB/db.config.js";
import { generateToken } from "../utils/token.js";

// Register new user
export const registerUser = async (req, res) => {
    const { name, email, password, address, role, status } = req.body;

    try {
        const findUser = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })
    
        if (findUser) {
            return res.json({
                status: 400,
                message: 'Email Already Taken. Please provide another email'
            })
        }
        
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password,
                address,
                role,
                status
            }
        });
    
        res.status(200).json({
            status: 200,
            message: 'User created successfully',
            data: newUser
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "User could not create successfully",
            error: error.message
        })
    }
}

// Get all users
export const getAllUser = async (req, res) => {
    try {
        const user = await prisma.user.findMany({});
        return res.json({
            status: 200,
            data: user,
            message: "All user successfully"
        })  
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "User could not get successfully",
            error: error.message
        })
    }
}

// Get user by id
export const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await prisma.user.findFirst({
            where: {
                id: userId
            }
        })
    
        return res.json({
            status: 200,
            data: user,
            message: "See user successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "User could not read successfully",
            error: error.message
        })
    }
 
}

// update user by id
export const updateUser = async (req, res) => {
    const userId = req.params.id;   
    const { name, email, password, address, role, status } = req.body;

    try {
        const updateData = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
                name,
                email,
                password,
                address,
                role,
                status
            }
        })
    
        res.status(200).json({
            status: 200,
            data: updateData,
            message: "Update user successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "User could not update successfully",
            error: error.message
        })
    }
}

// delete user by id
export const deleteUser = async (req, res) => {
    const userId = req.params.id;

    try {
        await prisma.user.delete({
            where: {
                id: userId
            }
        });
    
        return res.json({
            status: 200,
            message: 'user delete successfully'
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "User could not delete successfully",
            error: error.message
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                status: 'Failed',
                error: 'Please provide your credentials'
            })
        }

        const findUser = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })

        if (!findUser) {
            return res.status(401).json({
                status: "Failed",
                error: "No user found. Please create an account or try again later."
            })
        };

        if (findUser.status.toLowerCase() != "active") {
            return res.status(401).json({
                status: "Failed",
                error: "Your account is not active yet"
            })
        };

        const token = generateToken(findUser);
        const {password: pwd, ...others} = findUser;

        res.status(200).json({
            status: "Success",
            message: "Successfully login",
            data: {
                user: others,
                token
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "user could not login successfully",
            error: error.message
        });
    }
}

export const getMe = async (req, res, next) => {
    try {
        const findUser = await prisma.user.findUnique({
            where: {
                email: req.body.email,
            }
        })
        res.status(200).json({
            status: 'success',
            data: findUser
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "user could not login successfully",
            error: error.message
        })
    }
}