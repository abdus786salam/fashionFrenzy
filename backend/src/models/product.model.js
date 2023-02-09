const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
   
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  url: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min:0
  },
  product_type:{type:String,required:true},
  sub_type:{type:String,required:true},
  category: {
    type: String,
    required: true,
    enum: ["men", "women", "kids", "accessories"],
  },
  seller:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  },
});

const ProductModel=mongoose.model('product',productSchema)

module.exports={
  ProductModel
}
