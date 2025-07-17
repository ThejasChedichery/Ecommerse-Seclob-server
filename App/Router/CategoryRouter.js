
const express = require('express')
const Router = express.Router()
const {CreateCategory ,GetCategory,GetCategoryId} = require('../Controller/CategoryController')
const {Validation} = require('../../Middlewares/Validation')

Router.post('',Validation,CreateCategory)
Router.get('',Validation,GetCategory)
Router.get('/:id',Validation,GetCategoryId)

module.exports = Router


