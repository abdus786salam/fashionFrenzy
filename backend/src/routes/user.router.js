const express = require("express");
const bcrypt = require("bcrypt");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const {name,email,password,mobile} = req.body;
  const matchData=await UserModel.findOne({email})
 
    if(matchData){
        res.send({msg:"user with same email already exist. Please use another email"})
    }else{
        try {
            bcrypt.hash(password, Number(process.env.saltRounds), async (err, hashedPassword) => {
            const userData = new UserModel({
                name,
                email,
                password:hashedPassword,
                mobile
            });
            await userData.save();
            res.send({
              msg: "User created successfully",
            });
        });
          } catch (error) {
            console.log(error);
            res.send({
                msg:"something went wrong",
              error: error,
            });
          }
    }
 
});
userRouter.post("/login", async (req, res) => {
  const {email,password} = req.body;
  const matchData=await UserModel.findOne({email})
    if(!matchData){
        
        res.send({msg:"email does not exist"})
    }else{
        try {
            bcrypt.compare(password, matchData.password, (err, result) => {
                if (result) {
                    const token = jwt.sign(
                      { userId: matchData._id },
                      process.env.jwtSecretKey
                    );
                    res.send({ msg: "Login Sucessfully", token: token });
                  } else {
                    res.send({msg:"Wrong password"})
                  }
                });
          } catch (error) {
            console.log(error);
            res.send({
                msg:"something went wrong",
              error: error,
            });
          }
    }
 
});

module.exports={
    userRouter
}
