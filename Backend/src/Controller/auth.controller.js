const bcrypt = require('bcrypt');
const { userModel } = require("../Models/user.model");
const jwt = require('jsonwebtoken');

const signUpUser = async (req, res, next) => {
    try {
        const userData = req.body;
        const hashedPassword = await bcrypt.hash(userData.password, 5)
        
        const newUser = userModel({...userData, password:hashedPassword});
        await newUser.save();
        return res.status(201).json({message:'User Sign up Successfully!'})   
    } catch (error) {
        console.log(error);   
    }
    
};

const logInUser = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email:email});
        if (!user){
            return res.status(404).json({message:'User not found. Please register first!'})   
        }
        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword){
            return res.status(402).json({message:'Invalid password!'})   
        }
        const payload = {userId:user.id, name:user.name, role:user.role};
        const expIn = 60000* 60 
        const token = await jwt.sign(payload, 'wayfair', {expiresIn:expIn});
        res.cookie('token', token, {maxAge: expIn});

        return res.status(201).json({message:'User Sign up Successfully!', token});   
        
    } catch (error) {
        console.log(error);
        
    }
    
};

const logOutUser = async (req, res, next) => {
    try {
        res.clearCookie("token");
        return res.status(200).redirect('/auth/login');
        // const token = req.cookies.token;
        
        // if(!token){
        //     next();
        // }
        // else{
            
        // }
    } catch (error) {
        console.log(error);   
    }
    
};


module.exports = {signUpUser, logInUser, logOutUser};