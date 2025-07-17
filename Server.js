
const express = require('express')
const connectDataBase = require('./Utils/DataBase');
const cors = require('cors');
const UserRouter= require('./App/Router/UserRouter')
const CategoryRouter = require('./App/Router/CategoryRouter')
const SubCategoryRouter =require('./App/Router/SubCategoryRouter')
const WishlistRouter = require('./App/Router/WishlistRouter')
const ProductRouter = require('./App/Router/ProductRouter')

require('dotenv').config()

const app = express();
app.use(cors())
app.use(express.json())

//user router
app.use('/user',UserRouter)
//category router
app.use('/category',CategoryRouter)
//subcategory router
app.use('/subCategory',SubCategoryRouter)
//wishlist router
app.use('/wishlist',WishlistRouter)
//product router
app.use('/product',ProductRouter)


// connect to mongodb
connectDataBase()

const PORT = process.env.PORT || 3002
app.listen(PORT,()=>console.log(`server running on ${PORT}`))