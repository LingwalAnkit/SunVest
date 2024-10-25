const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
const AppError = require("../Utils/AppError");

module.exports.SignUser = async function (req, res, next) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return next(new AppError("User Already Exist", 400));
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({
            ...req.body,
            password: hashedPassword
        });
        const token = jwt.sign({ _id: newUser._id }, "secretkey123", {
            expiresIn: "90d"
        });
        res.status(201).json({
            status: "success",
            message: "User Registered Successfully!",
            token,
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

module.exports.LoginUser = async function (req, res, next) {
    try {
        const {email , password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return(
            next(new AppError("User Not Found" , 404))
        )
    }
    const isPasswordValid = await bcrypt.compare(password , user.password)
    if(!isPasswordValid){
        return(
            next(new AppError("Incorrect email or Password", 401))
        )
    }
    const token = jwt.sign({ _id: user._id }, "secretkey123", {
        expiresIn: "90d"
    });
    res.status(200).json({
        status:"success",
        message: "User Logged-In",
        token,
        user:{
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role
        }
    })
    } catch (error) {
       next(error) 
    }
};
