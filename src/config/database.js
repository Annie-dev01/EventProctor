const mongoose = require('mongoose');

const connectDB = async (mongoUri) => {
    try {
        const conn = await mongoose.connect(mongoUri);
        console.log(`Database Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB;