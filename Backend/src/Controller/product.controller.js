const { productModel } = require("../Models/product.model");

const addProduct = async (req, res, next) => {
    try {
        const productData = req.body;
        
        const newProduct = productModel(productData);
        await newProduct.save();
        return res.status(201).json({message:'Product added Successfully!'})   
    } catch (error) {
        console.log(error);   
    }
};

const readAllProduct = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const productList = await productModel.find().skip(skip).limit(limit);
        const total = await productModel.countDocuments();
        return res.status(200).json({
            total,
            page,
            pages: Math.ceil(total / limit),
            data:productList})       
    } catch (error) {
        console.log(error);   
    }  
};

const readSingleProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await productModel.findById(id);
        return res.status(200).json({data:product})      
    } catch (error) {
        console.log(error);   
    }   
};

const updateProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updateProduct = await productModel.findByIdAndUpdate(id, req.body, {new:"true"});
        return res.status(200).json({message:'Product Updated successfully!'});      
    } catch (error) {
        console.log(error);    
    } 
};

const deleteProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        await productModel.findByIdAndDelete(id);
        return res.status(200).json({message:'Product Deleted successfully!'});      
    } catch (error) {
        console.log(error);   
    }  
};

module.exports = {addProduct, readAllProduct, readSingleProduct, updateProduct, deleteProduct};