const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {type:String, require:true},
    lastName: {type:String, require:true},
    email: {type:String, require:true, unique:true},
    password: {type:String, require:true},
    phone: {type:String, require:true},
    address: {type:String, require:true},
    role:{type:String, enum:['admin', 'seller', 'customer'],default:'customer'},
    cart:[{ type:mongoose.Schema.Types.ObjectId, ref:'product'}],
    wishlist:[{ type:mongoose.Schema.Types.ObjectId, ref:'product'}],
    gender:{type:String}
    
}, {versionKey:false, timestamps:true});

const userModel = mongoose.model('user', UserSchema);
module.exports = {userModel};