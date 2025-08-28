const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://priya:priya123@cluster0.cuusdwy.mongodb.net/Velveta?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to server");
  });
