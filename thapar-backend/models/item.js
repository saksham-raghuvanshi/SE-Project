const mongoose = require("mongoose");
const ItemSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    stock : {
        type : Number,
        required : true,
        min : 0,
    },
    inPossessionOf : {
        type : Array,
        required : true,
        default : [],
    },
    // ADD IMAGES
    // image : {

    //     required : true,
    // }
});

const ItemModel = new mongoose.model("items",ItemSchema);
module.exports = ItemModel;