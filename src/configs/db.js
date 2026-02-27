const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log('Connecting to MongoDB...');
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ MongoDB Connection Error: ${error.message}`);
        // Log suggestion if it's a DNS/URI error
        if (error.message.includes('ENOTFOUND')) {
            console.error('👉 TIP: Please check if your MONGODB_URI in the .env file is correct and not a placeholder.');
        }
        process.exit(1);
    }
};

module.exports = connectDB;
