const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");


const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))


mongoose.connect(process.env.MONGO_DB_CONNECTION, () => {
    console.log("Connected to mongoDB");
})

app.use('/api/product', require('./routes/texnomartRoutes'))

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})