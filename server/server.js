const express = require('express');
const mongoose = require('mongoose');
const env = require('dotenv');
const cors = require('cors');
const app = express();
env.config();
const PORT = process.env.PORT || 4000;

app.use(cors());


// conecting to database
mongoose.connect("mongodb://127.0.0.1:27017/BlackCoffer").then((response)=>{
    if(!response){
        console.log(err);
    }else{
        console.log("Connection established!");
    }
});


// Routes
const appRoutes = require('./routes/appRoute');

app.use('/',appRoutes);









app.listen(PORT,()=>{
    console.log(`Listing on port ${PORT}`);
})