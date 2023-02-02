const fs = require("fs");
require("dotenv").config();
var cloudinary = require("cloudinary");

const imageUrlConverter = async (req, res, next) => {
  if (req.files) {
    cloudinary.config({
      cloud_name: process.env.cloudinary_cloud_name,
      api_key: process.env.cloudinary_api_key,
      api_secret: process.env.cloudinary_api_secret,
      secure: true,
    });
    try {
      const filePath = req.files.image.tempFilePath;
      let imageUrl = await cloudinary.uploader.upload(filePath, {
        folder: "nem-111-project",
      });
      console.log("image after upload", imageUrl);
      req.body.url = imageUrl.url;
      fs.unlinkSync(filePath);
      next();
    } catch (error) {
      console.log(error);
    }
  } else {
    next();
  }
};
module.exports = {
  imageUrlConverter,
};
