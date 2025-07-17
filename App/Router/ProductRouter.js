

const express = require('express')
const Router = express.Router()
const {CreateProduct,GetAllProducts,EditProduct} = require('../Controller/ProductController')
const {Validation} = require('../../Middlewares/Validation')

Router.post('',Validation,CreateProduct)
Router.get('',Validation,GetAllProducts)
Router.put('/:id',Validation,EditProduct)

module.exports = Router


