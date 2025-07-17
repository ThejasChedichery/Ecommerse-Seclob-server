
const mongoose = require('mongoose')

const SubCategorySchema = new mongoose.Schema({
    name:{type:String,required:true},
    categoryId :{type:mongoose.Schema.Types.ObjectId,required:true,ref:'category'},
    description : {type:String,required:true}
},{timestamps:true})

const SubCategoryData = mongoose.model('subCategory',SubCategorySchema)
module.exports = SubCategoryData