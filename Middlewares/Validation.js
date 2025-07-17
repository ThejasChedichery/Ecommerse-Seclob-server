
const jwt = require('jsonwebtoken')
const UserData = require("../App/Model/UserModel")
const bcrypt = require('bcrypt')

// Login validation & creating token
const LoginValidation = async (req, res, next) => {
    try {
        const findUser = await UserData.findOne({ email: req.body.email })
        if (findUser) {
            isPasswordValied = await bcrypt.compare(req.body.password, findUser.password)

            if (isPasswordValied) {

                const Token = await jwt.sign({ id: findUser._id, email: findUser.email }, 'Seclob@2025')
                // res.cookie("token", Token)
                console.log(findUser);
                
                req.user = {userName:findUser.userName,
                    email:findUser.email,
                    role:findUser.role,
                    token:Token}
                next()
            }
            else {
                throw new Error('Invalid password')
            }
        }
        else {
            throw new Error('Invalid email id')
        }
    }
    catch (err) {
        res.status(500).send({ message: "can't login  " + err })
    }
}

// checking is a valied user 
const Validation = async (req, res, next) => {

    const Token = req.body.token || req.user.token

    try {
        const isValiedUser = await jwt.verify(Token, 'Seclob@2025')
        if (isValiedUser) {
            req.id = isValiedUser.id
            next()
        }
        else {
            throw Error("No token avaliable")
        }
    } catch (err) {
        res.status(500).send({ message: "Not an auth user  " + err })
    }
}

// role validation
const RoleValidation = (...role) => {

    return async (req, res, next) => {

        const user = await UserData.findById(req.id)
        try {
            if (role.includes(user.role)) {
                next()
            }
            else {
                throw Error('You dont have access to this api')
            }
        } catch (err) {
            res.status(500).send({ message: "Access Denied  " + err })
        }
    }
}

module.exports = { LoginValidation, Validation, RoleValidation }