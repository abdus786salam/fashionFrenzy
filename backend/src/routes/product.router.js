const express = require("express");
const { authentication } = require("../middleware/authentication.middleware");
const {
  imageUrlConverter,
} = require("../middleware/imageUrlConverter.middleware");
const { ProductModel } = require("../models/product.model");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const category = req.query;
  //  // $and:[{price:{$gte:category?.price[0]}},{price:{$lte:category?.price[1]}}]
  console.log(category);
  try {
    if (category) {
      const products = await ProductModel.find(category).populate("seller");
      res.send(products);
    } else {
      const products = await ProductModel.find().populate("seller");
      res.send(products);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ err });
  }
});
productRouter.get("/:category", async (req, res) => {
  const { category } = req.params;

  console.log(category);
  try {
    if (category) {
      const products = await ProductModel.find(category);
      res.send(products);
    } else {
      const products = await ProductModel.find();
      res.send(products);
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ err });
  }
});

productRouter.post(
  "/upload",
  [imageUrlConverter, authentication],
  async (req, res) => {
    const payload = req.body;
    if(payload.admin){
        payload.seller=payload.admin
    }

    try {
      const product = new ProductModel(payload);
      await product.save();
      res.status(201).send({ message: "Product uploaded" });
    } catch (err) {
      console.log(err);
      res.status(401).send({ err });
    }
  }
);
productRouter.post("/search", async (req, res) => {
  const queryObj = req.query.q;
  try {
    const product = await ProductModel.find({
      sub_type: { $regex: queryObj, $options: "i" },
    });

    res.status(201).send(product);
  } catch (err) {
    console.log(err);
    res.status(400).send({ err });
  }
});

productRouter.patch(
  "/update",
//   [imageUrlConverter, authentication],
  async (req, res) => {
    try {
        const UpdatedUserData = await ProductModel.findByIdAndUpdate(
            { _id: req.body._id },
            { ...req.body },
            { new: true }
          );
          res.send(UpdatedUserData);
    } catch (err) {
      console.log(err);
      res.status(401).send({ err });
    }
  }
);

module.exports = {
  productRouter,
};
