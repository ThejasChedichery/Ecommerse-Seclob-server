
const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    name:{type:String,required:true},
    description : {type:String,required:true}
},{timestamps:true})

const CategoryData = mongoose.model('category',CategorySchema)
module.exports = CategoryData