const express = require("express");
const { connection } = require("./config/db");
const cors = require("cors");
require("dotenv").config();
const fileupload = require("express-fileupload");
const { userRouter } = require("./routes/user.router");
const { productRouter } = require("./routes/product.router");
const { cartRouter } = require("./routes/cart.router");
const { orderRouter } = require("./routes/order.router");

const app = express();

app.use(express.json());
app.use(
    cors({
      origin: "*",
    })
  );
  app.use(
    fileupload({
      useTempFiles: true,
    })
  );

app.use("/user", userRouter);
app.use('/product',productRouter)
app.use('/cart',cartRouter)
app.use('/order',orderRouter)
app.get("/", (req, res) => {
  res.send({ message: "default route" });
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
    res.sen({ message: "error while connecting to db" });
  }
  console.log(`running at http://localhost:${process.env.PORT}`);
});
