const mongoose = require('mongoose');


const mongoURI = process.env.MONGO_URI;


const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('conectao')

    } catch (error) {

        console.error(err.message);
        process.exit(1);

    }
};


module.exports = connectDB;
