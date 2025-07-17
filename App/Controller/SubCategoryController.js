
const SubCategoryData = require('../Model/SubCategoryModel')

// create subcategory
const CreateSubCategory = async (req,res)=>{

    let data = new SubCategoryData(req.body)
    try {
        const saveSubCategory = await data.save()
        res.status(200).send({ message: "Sub Category added successfully", saveSubCategory })
    } catch (err) {
        res.status(500).send({ message: 'canot added Sub Category', err })
    }
}

// get all subcategories

const GetSubCategory = async (req,res)=>{

    try {
        const allCategory = await SubCategoryData.find()
        if(allCategory){
            res.status(200).send({ message: "Sub Category fetch successfully", data: allCategory })
        }
        else{
            res.status(400).send({ message: "no Sub category found" })
        }
    } catch (error) {
        res.status(500).send({ message: 'canot fetch Sub Category', error })
    }
}

// get category by category id
const GetSubCategoryId = async (req,res)=>{

    
    try {
        const SubCategorybyId = await SubCategoryData.find(req.params).populate('categoryId','name')
        if(SubCategorybyId){
            res.status(200).send({ message: "Sub Category fetch successfully", data: SubCategorybyId })
        }
        else{
            res.status(400).send({ message: "no Sub category found" })
        }
    } catch (error) {
        res.status(500).send({ message: 'canot fetch sub Category', error })
    }
}

module.exports = { CreateSubCategory ,GetSubCategory, GetSubCategoryId}