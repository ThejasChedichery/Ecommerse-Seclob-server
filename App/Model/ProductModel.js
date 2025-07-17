
const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  subCategoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'subCategory' },
  variants: [
    {
      ram: { type: String },
      price: { type: Number },
      quantity: { type: Number },
    }
  ],
  images: [{ type: String }]
}, { timestamps: true })

const ProductData = mongoose.model('product', ProductSchema)
module.exports = ProductData
