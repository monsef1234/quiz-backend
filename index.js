const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const userRoutes = require("./routes/UserRoutes");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/user", userRoutes);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });
app.listen(5001, () => {
  console.log("Server Connected");
});
