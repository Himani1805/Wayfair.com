const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {PORT} = require('./src/Config/config');
const {connectToDB} = require('./src/Config/db');
const { authRouter } = require('./src/Routes/auth.route');
const { userRouter } = require('./src/Routes/user.route');
const { authorization } = require('./src/Middleware/auth.middleware');
const { productRouter } = require('./src/Routes/product.route');
const { orderRouter } = require('./src/Routes/order.route');

const app = express();

app.use(cookieParser());
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/order', orderRouter);

app.use('/test', authorization(['admin']), (req, res, next)=>{
    res.status(200).json({message:'Welcome to admin page!'});   

})

app.listen(PORT, ()=>{
    connectToDB();
    console.log(`Server running on port http://localhost:${PORT}`)
});