const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require("./config/database");



dotenv.config();
const app = express();
app.use(cors());


const PORT = process.env.PORT ||3001;
connectDB(process.env.MONGO_URI);
app.use(express.json());

app.use('/users', require('./routes/user.routes'));
app.use('/events', require('./routes/event.routes'));
app.use('/attendees', require('./routes/attendee.routes'));



app.listen(PORT, () =>{
console.log(`server running on port ${PORT}`);
});