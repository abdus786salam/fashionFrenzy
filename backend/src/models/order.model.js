const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  cart_item: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cart",
      required: true,
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
  delivery_address: {
    name: { type: String },
    address1: { type: String },
    address2: { type: String },
    pin_code: { type: String },
    city: { type: String },
    email: { type: String },
    mobile: { type: String },
  },
});

const OrderModel=mongoose.model('order',orderSchema)

module.exports={
    OrderModel
}
