const { userModel } = require("../Models/user.model");

const readAllUser = async (req, res, next) => {
    try {
        const userList = await userModel.find();
        return res.status(200).json({data:userList})       
    } catch (error) {
        console.log(error);   
    }  
};

const readSingleUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const user = await userModel.findById(id);
        return res.status(200).json({data:user})      
    } catch (error) {
        console.log(error);   
    }   
};

const updateUser = async (req, res, next) => {
    try {

        
        
    } catch (error) {
        console.log(error);
        
    }
    
};

const deleteUser = async (req, res, next) => {
    try {

        
        
    } catch (error) {
        console.log(error);
        
    }
    
};

module.exports = {readAllUser, readSingleUser, updateUser, deleteUser};