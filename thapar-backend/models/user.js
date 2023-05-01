const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        index : {unique : true},
        match : /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(thapar)\.edu$/,
    },
    rollNo : {
        type : Number,
        required : true,
        index : {unique : true},
        match : /^[0-9]{9}$/,
    },
    userRole : {
        type : Number,
        default : 0,
    },
    phoneNumber : {
        type : Number,
        required : true,
        index : {unique : true},
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    },
    password : {
        type : String,
        required : true,
    },
    itemsRented : {
        type : Array,
        default : [],
    }
})

const UserModel = new mongoose.model("users",UserSchema);
module.exports = UserModel;