
const express = require('express')
const Router = express.Router()
const {CreateSubCategory ,GetSubCategory, GetSubCategoryId} = require('../Controller/SubCategoryController')
const {Validation} = require('../../Middlewares/Validation')

Router.post('',Validation,CreateSubCategory)
Router.get('',Validation,GetSubCategory)
Router.get('/:categoryId',Validation,GetSubCategoryId)

module.exports = Router


