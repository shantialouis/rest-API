const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fname: String,
    lname:{
        type: String,
        required: [true,'you must add your last name !!'],
    },
    age:{
        type: Number,
        required: [true,'you must add your age !!']
    },
    email:{
        type: String,
        required: [true,'you must add your age !!'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

    },
    password:{
        type: String,
        required: [true,'you must add your password !!'],
    }
})  
const user=mongoose.model('person',userSchema)
module.exports=user;