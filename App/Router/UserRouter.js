

const express = require('express')
const Router = express.Router()
const {AddingUser,FindAllUser,LogInUser} = require('../Controller/UserController')
const {LoginValidation,Validation, RoleValidation} = require('../../Middlewares/Validation')

Router.post('/register',AddingUser)
Router.post('/login',LoginValidation,Validation,LogInUser)
Router.get('/',Validation,RoleValidation('admin'),FindAllUser)

module.exports = Router


