const express=require('express')
const { authentication } = require('../middleware/authentication.middleware')
const { OrderModel } = require('../models/order.model')



const orderRouter=express.Router()

orderRouter.post('/',authentication,async(req,res)=>{
    const payload = req.body
        try {
            const product=new  OrderModel(payload)
            const updatedProduct=await product.save()
            console.log(updatedProduct)
            res.status(201).send({message:"Your order placed successfully",orderId:updatedProduct._id})
        } catch (err) {
            console.log(err)
            res.status(401).send({err})
        }  
})
orderRouter.patch('/',authentication,async(req,res)=>{
    const payload = req.body
    try {
        await OrderModel.findByIdAndUpdate({_id:payload.orderId},{delivery_address:payload.delivery_address})
            res.status(201).send({message:"Your shipping address added successfully"})
        } catch (err) {
            console.log(err)
            res.status(401).send({err})
        }  
})

module.exports={
    orderRouter
}

