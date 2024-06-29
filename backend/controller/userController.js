import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exists" });
    }
    //check password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
    //generate token
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Registration Error !" });
  }
};

//make token
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//register user
const registerUser = async (req, res) => {
  //destructure email,password,name
  const { name, password, email } = req.body;
  try {
    //check user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }
    //validating email and password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter Valid Email !" });
    }
    //check password length
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Enter Minimum 8 characters !",
      });
    }
    // hash the user password
    const salt = await bcrypt.genSalt(10); //This method generates a salt, which is a random value added to the password before hashing to ensure that even identical passwords have different hashes.
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new user
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const user = await newUser.save();
    //create token and send as response
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Error During Registration !",
    });
  }
};

export { loginUser, registerUser };
