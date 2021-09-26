const express = require('express');
const app = express();
//use json format
app.use(express.json())
require('dotenv').config({ path: './config/config.env' })

//router
app.use('/user',require('./routers/userRouter'))


// connect to mongoos data base
const mongoose = require('mongoose');
mongoose.connect(process.env.mongo_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then((res)=>console.log('data base connected'))
.catch((err)=>console.log(err));
// create the PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT,(err)=>err ? console.log(err) : console.log('server is running on port',PORT))