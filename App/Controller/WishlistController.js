
const WishlistData = require('../Model/WishlistModel')

// create wishlist
const AddToWishlist = async (req,res)=>{

    try {
        const isInWishlist = await WishlistData.find({userId:req.body.userId,productId:req.body.productId})

        if(isInWishlist==0){
            let data = new WishlistData(req.body)
            const saveWishlist= await data.save()
            res.status(200).send({ message: "wishlist added successfully", saveWishlist })
        }
       else{
        res.status(400).send({ message: "Already in wishlist" })
       }
    } catch (err) {
        res.status(500).send({ message: 'canot added wishlist', err })
    }
}

// get wishlist by user Id

const AllWishlistByUser = async (req,res)=>{

    try {
        const allWishlist = await WishlistData.find(req.params).populate('productId')
        if(allWishlist){
            res.status(200).send({ message: "Wishlist fetch successfully", data: allWishlist })
        }
        else{
            res.status(400).send({ message: "no Wishlist found" })
        }
    } catch (error) {
        res.status(500).send({ message: 'canot fetch Wishlist', error })
    }
}

// delete from whishlist

const DeleteFromWishlist = async (req, res) => {
    try {
      const deleteWishlist = await WishlistData.findOneAndDelete(req.params)
  
      if (deleteWishlist) {
        res.status(200).send({ message: "Wishlist item deleted successfully", data: deleteWishlist })
      } else {
        res.status(400).send({ message: "No Wishlist item found to delete" })
      }
  
    } catch (error) {
      res.status(500).send({ message: 'Cannot delete Wishlist item', error })
    }
  }
  

module.exports = {AddToWishlist,AllWishlistByUser,DeleteFromWishlist}