const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

const immediateRoutes = require('./api/routes/immediate_delivery');


mongoose.connect(
    "mongodb://localhost:27017/osiso" +
    process.env.MongoDB_PW,
    {
        useMongoClient:true
    }

);

//used for logging
app.use(morgan('dev'));

//routes whcih should handle requests
app.use('/immediate', immediateRoutes);

app.use((req, res, next) =>{
    const error =  new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) =>{
   res.status(error.status || 500);
   res.json({
       error:{
           message: error.message
       }
   });
})

module.exports = app;