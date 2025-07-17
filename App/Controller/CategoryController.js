
const CategoryData = require('../Model/CategoryModel')

// create category
const CreateCategory = async (req,res)=>{

    let data = new CategoryData(req.body)
    try {
        const saveCategory = await data.save()
        res.status(200).send({ message: "Category added successfully", saveCategory })
    } catch (err) {
        res.status(500).send({ message: 'canot added Category', err })
    }
}

// get all categories

const GetCategory = async (req,res)=>{

    try {
        const allCategory = await CategoryData.find()
        if(allCategory){
            res.status(200).send({ message: "Category fetch successfully", data: allCategory })
        }
        else{
            res.status(400).send({ message: "no category found" })
        }
    } catch (error) {
        res.status(500).send({ message: 'canot fetch Category', error })
    }
}

// get category by id
const GetCategoryId = async (req,res)=>{

    try {
        const CategorybyId = await CategoryData.findById(req.params.id)

        if(allCategory){
            res.status(200).send({ message: "Category fetch successfully", data: CategorybyId })
        }
        else{
            res.status(400).send({ message: "no category found" })
        }
    } catch (error) {
        res.status(500).send({ message: 'canot fetch Category', error })
    }
}

module.exports = { CreateCategory ,GetCategory,GetCategoryId}