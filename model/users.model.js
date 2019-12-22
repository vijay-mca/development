const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstname:{
        type:String ,
        required:true ,
        minlength:3 ,
        trim:true
    },
    lastname:{
        type:String ,
        minlength:1 ,
        trim:true
    },
    email:{
        type:String ,
        unique:true ,
        required:true ,
        trim: true
    },
    mobile:{
        type:Number ,
        required:true ,
        minlength:10,
        maxlength:10
    },
    password:{
        type:String ,
        required:true ,
        trim: true,
        minlength:5
    }
},{
    timestamps:true
});

module.exports = mongoose.model('users',userSchema);