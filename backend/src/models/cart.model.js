const mongoose=require('mongoose')

const cartSchema=mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        min:1
    }
})

const CartModel=mongoose.model("cart",cartSchema)

module.exports={
    CartModel
}