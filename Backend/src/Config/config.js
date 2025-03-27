require('dotenv').config();

const PORT = process.env.PORT || 9090;
const DB_URI = process.env.DB_URI;
const FRONTEND_URL =process.env.FRONTEND_URL;

module.exports = {PORT, DB_URI, FRONTEND_URL}