const mongoose = require('mongoose');

const dbURI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        if (!dbURI) {
            throw new Error('La variable MONGO_URI no está definida en el archivo .env');
        }
        await mongoose.connect(dbURI);
        console.log('Conectado a la base de datos MongoDB');

    } catch (error) {
        process.exit(1); 
    }
};

module.exports = connectDB;