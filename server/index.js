const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const connection = require("./config/connection");
const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.get("/", (req, res) => {
  res.send("SERVER HOME");
});
app.use("/user", require("./routes/userRoutes"));

app.listen(5000, () => {
  console.log("SERVER RUNNIBG AT PORT 5000");
});
