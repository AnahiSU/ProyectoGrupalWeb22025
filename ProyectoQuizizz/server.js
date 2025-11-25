const express = require('express');

const connectDB = require('./config/database');

const app = express();
const port = 3000;

connectDB();

app.listen(port, () => {

    console.log(`servidor en puerto ${port}`);
});
