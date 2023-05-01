const ItemModel = require("../models/item");
const UserModel = require("../models/user");

class Item {
    async getAllItems(req,res) {
        try {
            const user = await UserModel.findOne({_id : req.params.userId});
            if(user.userRole === 1) {
                const items = await ItemModel.find({});
                return res.send({success : items});
            } else {
                res.send({error : "You are not authorized"});
            }
        } catch (err) {
            return res.send({error : err});
        }
    }
    async addItem(req,res) {
        if(!req.body.name) {
            return res.send({error : "No name provided"});
        }
        if(!req.body.stock) {
            return res.send({error : "Please provide stock"});
        }
        try {
            const newItem = new ItemModel(req.body);
            const savedItem = newItem.save();
            return res.json({success : "Added item successfully!", item : newItem});
        } catch(err) {
            console.log("An error occured while adding the item!");
            return res.send({error : err});
        }
    }
    async deleteItem(req,res) {
        try {
            const item = await ItemModel.findByIdAndDelete(req.params.itemId);
            return res.send({success : "Deleted the item successfully!"});
        } catch(err) {
            console.log("An error occured while trying to delete the item");
            return res.send({error : err});
        }
    }
    async rentItem(req,res) {
        try {
            let item = await ItemModel.findOne({_id : req.body._id});
            if(item.stock === 0) {
                return res.send({success : "Not enough stock"});
            } else {
                let newStock = item.stock-1;
                let userArray = item.inPossessionOf;
                let user = await UserModel.findOne({_id : req.body.user});
                let itemArray = user.itemsRented;
                userArray.push(user);
                let updatedItem = await ItemModel.findOneAndUpdate({_id:req.body._id},{stock : newStock , inPossessionOf : userArray});
                let itemToBeStoredForUser = {
                    name : updatedItem.name,
                    _id : updatedItem._id,
                }
                itemArray.push(itemToBeStoredForUser);
                let updatedUser = await UserModel.findOneAndUpdate({_id:req.body.user},{itemsRented : itemArray});
                return res.send({success : "Rented the item"});
            }
        } catch(err) {
            console.log("Unknown error");
            return res.send({error : err});
        }
    }
    async returnItem(req,res) {
        try {
            let item = await ItemModel.findOne({_id : req.body._id});
            let user = await UserModel.findOne({_id : req.body.user});
            let newStock = item.stock + 1;
            let userArray = item.inPossessionOf;
            for(let i = 0; i < userArray.length; i++) {
                if(userArray[i] == user) {
                    userArray.splice(i, 1);
                }
            }
            let updateItem = await ItemModel.findOneAndUpdate({_id : req.body._id},{stock : newStock, inPossessionOf : userArray});
            return res.send({success : "Item returned successfully!"});
        } catch(err) {
            console.log("Unknown error");
            return res.send({error : err});
        }
    }
}

const itemController = new Item();
module.exports = itemController;