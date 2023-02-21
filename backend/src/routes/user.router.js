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
            message: "User created successfully",
          });
        }
      );
    } catch (error) {
      console.log(error);
      res.send({
        message: "something went wrong",
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
          res.status(200).send({ msg: "Login Successful", token: token });
        } else {
          res.status(401).send({ msg: "Wrong password" });
        }
      });
    } catch (error) {
      console.log(error);
      res.send({
        message: "something went wrong",
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
        res.send({ message: "please upload image" });
      }
    } else {
      res.send({ message: "you are not authorized" });
    }
  }
);

userRouter.get("/details", (req, res) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, process.env.jwtSecretKey);
    if (decoded) {
      const user = decoded.user_info;
      res.status(200).send(user);
    } else {
      res.status(400).send("something went wrong");
    }
  } else {
    res.status(400).send("Please login First");
  }
});

userRouter.get("/count", async (req, res) => {
  try {
    const totalUsers = await UserModel.find({
      user_type: { $ne: "admin" },
    });
    res.status(200).send(totalUsers);
  } catch (err) {
    console.log(err);
    res.status(400).send({ err });
  }
});

module.exports = {
  userRouter,
};
