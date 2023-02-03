const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar_url: { type: String },
    user_type: {
      type: String, 
      default:"user",
      required: true,
      enum: ["user", "seller", "admin"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
