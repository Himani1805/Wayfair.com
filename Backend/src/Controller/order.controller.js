const { orderModel } = require("../Models/order.model");

const addOrder = async (req, res, next) => {
    try {
        const orderData = req.body;
        
        const newData = orderModel(orderData);
        await newData.save();
        return res.status(201).json({message:'Order added Successfully!'})   
    } catch (error) {
        console.log(error); 
        return res.status(500).json({ message: 'Something went wrong', error });  
    }
};

const readAllOrder = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const orderList = await orderModel.find().skip(skip).limit(limit);
        const total = await orderModel.countDocuments();
        return res.status(200).json({
            total,
            page,
            pages: Math.ceil(total / limit),
            data:orderList})       
    } catch (error) {
        console.log(error);   
        return res.status(500).json({ message: 'Something went wrong', error });
    }  
};

const readSingleOrder = async (req, res, next) => {
    try {
        const id = req.params.id;
        const order = await orderModel.findById(id);
        return res.status(200).json({data:order})      
    } catch (error) {
        console.log(error);  
        return res.status(500).json({ message: 'Something went wrong', error }); 
    }   
};

const updateOrder = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updateOrder = await orderModel.findByIdAndUpdate(id, req.body, {new:true});
        return res.status(200).json({message:'Order Updated successfully!'});      
    } catch (error) {
        console.log(error);  
        return res.status(500).json({ message: 'Something went wrong', error });  
    } 
};

const deleteOrder = async (req, res, next) => {
    try {
        const id = req.params.id;
        await orderModel.findByIdAndDelete(id);
        return res.status(200).json({message:'Order Deleted successfully!'});      
    } catch (error) {
        console.log(error); 
        return res.status(500).json({ message: 'Something went wrong', error }); 
    }  
};

module.exports = {addOrder, readAllOrder, readSingleOrder, updateOrder, deleteOrder};