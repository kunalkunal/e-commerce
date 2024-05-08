
const userDao = require('../dao/user.dao.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cartDao = require('../dao/cart.dao.js')
const createUser = async (req, res) => {
    try {
        const { email, password, name, productIds } = req.body
        const isUserExist = await userDao.findOne({ email: email })
        if (isUserExist) {
            res.status(200).send({ message: 'email is already exist', status: false })
        }
        const hashPassword = await bcrypt.hash(password, 10)
        const userData = {
            name: name,
            email: email,
            password: hashPassword
        }
        let user = await userDao.create(userData)
        if (productIds?.length > 0) {
            for (const iterator of productIds) {
                await cartDao.create({ productId: iterator, userId: user._id })
            }
        } res.status(200).send({ status: true,message:'Account sucessfully created' })
    } catch (error) {
        console.log(error)
    }
}
const signin = async (req, res) => {
    try {
        const { email, password, productIds } = req.body
        const isUserExist = await userDao.findOne({ email: email })
        if (!isUserExist) {
            res.status(200).send({ message: 'email is does not exist' })
        }
        const checkPassword = await bcrypt.compare(password, isUserExist.password)

        if (checkPassword) {
            const tokenData = {
                _id: isUserExist._id,
                email: isUserExist.email,
            }
            const token = await jwt.sign(tokenData, 'sshhhhh', { expiresIn: 60 * 60 * 8 });

            const tokenOption = {
                httpOnly: true,
                secure: true
            }
            if (productIds?.length > 0) {
                for (const iterator of productIds) {
                    await cartDao.create({ productId: iterator, userId: isUserExist._id })
                }
            }
            res.cookie("token", token, tokenOption).status(200).json({
                message: "Login successfully",
                token: token,
                success: true,
                error: false,
                userId: isUserExist._id,
                isAdmin:isUserExist.isAdmin
            })

        } else {
            throw new Error("Please check Password")
        }

    } catch (error) {
        console.log(error)
    }
}
module.exports = {
    createUser, signin
}