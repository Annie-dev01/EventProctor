const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/database");


dotenv.config();
const app = express();

const PORT = process.env.PORT ||3001;
connectDB(process.env.MONGO_URI);
app.use(express.json());

app.use('/user', require('./routes/user.routes'));


app.listen(PORT, () =>{
console.log(`server running on port ${PORT}`);
});