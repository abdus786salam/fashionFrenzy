const express=require('express')
const { authentication } = require('../middleware/authentication.middleware')
const { CartModel } = require('../models/cart.model')


const cartRouter=express.Router()

cartRouter.get('/',authentication,async(req,res)=>{
    userId=req.body.user
    try {
        if(userId){
            const cartData= await  CartModel.find({user:userId}).populate(['product'])
            console.log(cartData)
            if(cartData){

                res.send(cartData) 
            }else{

                res.send({message:"No cart data found of this "})   
            }
        }else{
            res.send({message:"Please login frist"})  
        }
    } catch (err) {
        console.log(err)
        res.status(400).send({err})
    }
    
})

cartRouter.post('/add', authentication ,async(req,res)=>{
    const payload = req.body
    try {
        const product=new  CartModel(payload)
        await product.save()
        res.status(201).send({msg:"Product added to your cart"})
    } catch (err) {
        console.log(err)
        res.status(401).send({err})
    }

})

cartRouter.patch('/increase', authentication ,async(req,res)=>{
    const {user,id,quantity=1} = req.body
    console.log(user,quantity,id)
    const checkQty= await CartModel.findById({"_id":id},{"quantity":1,"_id":0})
    
    try {
        if(quantity&&(checkQty.quantity+quantity)<=10){
            if(quantity>1){
                const product= await CartModel.findByIdAndUpdate({"_id":id},{$inc:{"quantity":quantity}},{new:true})
                res.status(201).send({msg:`Cart product quantity increased by ${quantity}`})
            }else{
                const product= await CartModel.findByIdAndUpdate({"_id":id},{$inc:{"quantity":1}},{new:true})
                res.status(201).send({msg:`Cart product quantity increased by 1`})
            }
        }else{
            res.status(403).send({message:`quantity cant be ${checkQty.quantity}`})
        }
        
       
    } catch (err) {
        console.log(err)
        res.status(401).send({err})
    }

})
cartRouter.patch('/decrease', authentication ,async(req,res)=>{
    const {user,id,quantity=1} = req.body
    const checkQty= await CartModel.findById({"_id":id},{"quantity":1,"_id":0})
    console.log(user,quantity,id)
    try {
        if(quantity&&(checkQty.quantity-quantity)<=10&&(checkQty.quantity-quantity)>0){
        if(quantity>1){
            const product= await CartModel.findByIdAndUpdate({"_id":id},{$inc:{"quantity":-quantity}},{new:true})
            res.status(201).send({msg:`Cart product of id ${id} quantity decreased by ${quantity}`})
        }else{
            const product= await CartModel.findByIdAndUpdate({"_id":id},{$inc:{"quantity":-1}},{new:true})
            res.status(201).send({msg:`Cart product of id ${id} quantity decreased by ${quantity}`})
        }
    }else{
        res.status(403).send({message:`quantity cant be decrease below ${checkQty.quantity}`})
    }
    } catch (err) {
        console.log(err)
        res.status(401).send({err})
    }

})

cartRouter.delete('/',authentication,async(req,res)=>{
    const {user,id} = req.body
    try {
        await CartModel.findOneAndDelete({"user":user,"_id":id})
        res.status(200).send({message:`Cart product of id ${id} deleted successfully` })
    } catch (err) {
        console.log(err)
        res.status(400).send({err})
    }
})

module.exports={
    cartRouter
}