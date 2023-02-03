const express = require("express");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");
const { authentication } = require("../middleware/authentication.middleware");
const {
  imageUrlConverter,
} = require("../middleware/imageUrlConverter.middleware");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password, mobile } = req.body;
  const matchData = await UserModel.findOne({ email });

  if (matchData) {
    res.status(409).send({
      msg: "user with same email already exist. Please use another email",
    });
  } else {
    try {
      bcrypt.hash(
        password,
        Number(process.env.saltRounds),
        async (err, hashedPassword) => {
          const userData = new UserModel({
            name,
            email,
            password: hashedPassword,
            mobile,
          });
          await userData.save();
          res.send({
            msg: "User created successfully",
          });
        }
      );
    } catch (error) {
      console.log(error);
      res.send({
        msg: "something went wrong",
        error: error,
      });
    }
  }
});
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const matchData = await UserModel.findOne({ email });
  if (!matchData) {
    res.status(401).send({ msg: "email does not exist" });
  } else {
    try {
      bcrypt.compare(password, matchData.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { user_info: matchData },
            process.env.jwtSecretKey
          );
          res.status(200).send({ msg: "Login Sucessfully", token: token,user:matchData });
        } else {
          res.status(401).send({ msg: "Wrong password" });
        }
      });
    } catch (error) {
      console.log(error);
      res.send({
        msg: "something went wrong",
        error: error,
      });
    }
  }
});
userRouter.patch(
  "/update",
  [imageUrlConverter, authentication],
  async (req, res) => {
    if (req.body.user) {
      if (req.body.url) {
        try {
          const UpdatedUserData = await UserModel.findByIdAndUpdate(
            { _id: req.body.user._id },
            { avatar_url: req.body.url },
            { new: true }
          );
          res.send(UpdatedUserData);
        } catch (error) {
          res.send({ error });
        }
      } else {
        res.send({ msg: "please upload image" });
      }
    } else {
      res.send({ msg: "you are not authorized" });
    }
  }
);

module.exports = {
  userRouter,
};
