let mongoose = require('mongoose');
let {DB_URI} = require('./config')

const connectToDB = async () => {
    try {
        await mongoose.connect(DB_URI)
        console.log("Database connected successfully")
        
    } catch (error) {
        console.log(error);
        
    }
    
};

module.exports = {connectToDB};