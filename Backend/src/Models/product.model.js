const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {type:String, require:true},
    category: {type:String, require:true},
    subCategory: {type:String, require:true},
    price: {type:String, require:true},
    discount: {type:String, require:true},
    finalPrice: {type:String, require:true},
    rating: {type:String, require:true},
    size: {type:String, require:true},
    deliveryTime: {type:String, require:true},
    ocassion: {type:String, require:true},
    color: {type:String, require:true},
    countryOfOrigin: {type:String, require:true},




    email: {type:String, require:true, unique:true},
    password: {type:String, require:true},
    phone: {type:String, require:true},
    address: {type:String, require:true},
    role:{type:String, enum:['admin', 'seller', 'customer'],default:'customer'},
    cart:[{ type:mongoose.Schema.Types.ObjectId, ref:'product'}],
    wishlist:[{ type:mongoose.Schema.Types.ObjectId, ref:'product'}],
    gender:{type:String, enum:['male', 'female', 'other'],default:'customer'}
    
}, {versionKey:false, timestamps:true});

const productModel = mongoose.model('product', ProductSchema);
module.exports = {productModel};