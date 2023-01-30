const express=require('express')
const { connection } = require('./config/db')
require('dotenv').config()
const { userRouter } = require('./routes/user.router')

const app=express()


app.use(express.json())

app.use('/user',userRouter)

app.get('/',(req,res)=>{
res.send({msg:"default route"})
})

app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log(error)
        res.sen({msg:"error while connecting to db"})
        
    }
    console.log(`running at http://localhost:${process.env.PORT}`)
})