const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {PORT} = require('./src/Config/config');
const {connectToDB} = require('./src/Config/db');

const app = express();


app.use(cookieParser());
app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

app.listen(PORT, ()=>{
    connectToDB();
    console.log(`Server running on port http://localhost:${PORT}`)
})