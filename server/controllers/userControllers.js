const bcrypt = require("bcrypt");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;
    if (!fname || !lname || !email || !password) {
      return res.status(400).json({ message: "ALL FIELDS ARE REQUIRED" });
    }
    const duplicate = await User.findOne({ email });
    if (duplicate) {
      return res.status(400).json({ mrssage: "EMAIL IS ALREADY EXIST" });
    }
    const hashpass = await bcrypt.hash(password, 10);
    const userobj = {
      fname,
      lname,
      email,
      password: hashpass,
    };
    const user = await User.create(userobj);
    if (user) {
      return res.status(201).json({ message: "USER CREATED SUCCESFULLY" });
    } else {
      return res.status(400).json({ message: "USER CREATION FAILED" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "ALL FIELDS ARE REQUIRED" });
    }
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "EMAIL DOES NOT EXIST" });
    }
    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      return res.status(400).json({ message: "INVALID CREDENTIALS" });
    }

    const token = jwt.sign(
      { id: userExist._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ accessToken: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  createUser,
  login,
};
