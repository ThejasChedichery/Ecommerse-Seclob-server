

const express = require('express')
const Router = express.Router()
const {AddToWishlist,AllWishlistByUser,DeleteFromWishlist} = require('../Controller/WishlistController')
const {Validation} = require('../../Middlewares/Validation')

Router.post('',Validation,AddToWishlist)
Router.get('/:userId',Validation,AllWishlistByUser)
Router.delete('/:userId/:productId',Validation,DeleteFromWishlist)

module.exports = Router


