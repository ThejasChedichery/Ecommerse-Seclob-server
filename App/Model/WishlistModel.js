
const mongoose = require('mongoose')

const WishlistSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product' }
}, { timestamps: true })

const WishlistData = mongoose.model('wishlist', WishlistSchema)
module.exports = WishlistData
