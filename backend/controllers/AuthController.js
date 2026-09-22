const User = require("../model/usersModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
    const isProduction = process.env.NODE_ENV === "production";
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user, token });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     const isProduction = process.env.NODE_ENV === "production";
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
       sameSite: isProduction ? "none" : "lax",
       secure: isProduction,
     });
     res.status(201).json({ message: "User logged in successfully", success: true, token });
     next()
  } catch (error) {
    console.error(error);
  }
};

module.exports.Logout = (req, res) => {
  const isProduction = process.env.NODE_ENV === "production";
  res.cookie("token", "", {
    expires: new Date(0),
    withCredentials: true,
    httpOnly: false,
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction,
  });
  res.status(200).json({ success: true, message: "Logged out successfully" });
};