const express=require('express')
const { authentication } = require('../middleware/authentication.middleware')
const { imageUrlConverter } = require('../middleware/imageUrlConverter.middleware')
const { ProductModel } = require('../models/product.model')

const productRouter=express.Router()

productRouter.get('/',async(req,res)=>{
    try {
        const products= await ProductModel.find()
        res.send(products)   
    } catch (err) {
        console.log(err)
        res.status(400).send({err})
    }
    
})

productRouter.post('/upload', [imageUrlConverter,authentication] ,async(req,res)=>{
    const payload = req.body
    try {
        const product=new ProductModel(payload)
        await product.save()
        res.status(201).send({msg:"Product uploaded"})
    } catch (err) {
        console.log(err)
        res.status(401).send({err})
    }

})

productRouter.patch('/update', [imageUrlConverter,authentication] ,async(req,res)=>{
    const payload = req.body
    try {
        const product=new ProductModel(payload)
        await product.save()
        res.status(201).send({msg:"Product uploaded"})
    } catch (err) {
        console.log(err)
        res.status(401).send({err})
    }

})

module.exports={
    productRouter
}