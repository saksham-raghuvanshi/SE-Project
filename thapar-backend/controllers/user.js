const UserModel = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config/key");

class User {
    async signUp(req,res) {
        let {name,email,rollNo,phoneNumber,password,confirmPassword} = req.body;
        if(password !== confirmPassword) {
            return res.send({error : "Passwords do not match!"});
        }
        if(password.length < 8) {
            return res.send({error : "Password must be at least 8 characters"});
        }
        if(!name || !email || !password || !phoneNumber) {
            return res.send({error : "All fields are required"});
        }
        if(phoneNumber.length !== 10) {
            return res.send({error : "Please enter a valid phone number"});
        }
        // WRITE A MIDDLEWARE TO VALIDATE EMAIL
        try{
            const user = await UserModel.findOne({email : email } || {phoneNumber : phoneNumber} || {rollNo : rollNo});
            if(user) {
                return res.send({error : "User already exists!"});
            }
            password = bcrypt.hashSync(password,10);
            const newUser = new UserModel({name,email,rollNo,phoneNumber,password});
            const savedUser = await newUser.save();
            if (savedUser) {
                return res.send({success : "User created successfully"});
            }
        } catch(err) {
            console.log("An error occured while signing up");
            return res.send({error : err});
        }
    }
    async signIn(req,res) {
        const {email,rollNo,password} = req.body;
        try {
            let user;
            if(!email) {
                user = await UserModel.findOne({rollNo : rollNo});
            } else if(!rollNo) {
                user = await UserModel.findOne({email : email}); 
            }
            if(!user) {
                return res.send({error : "User does not exist!"});
            } else {
                const confirmPassword = await bcrypt.compare(password,user.password);
                if(confirmPassword) {
                    const token = jwt.sign(
                        {_id : user._id, name : user.name, role : user.userRole, email : user.email, rollNo : user.rollNo},
                        JWT_SECRET
                    );
                    const encode = jwt.verify(token,JWT_SECRET);
                    return res.send({
                        token : token,
                        user : encode
                    });
                } else {
                    return res.send({error : "Wrong credentials!"});
                }
            }
        } catch(err) {
            console.log("An error occured while signing in");
            return res.send({error : err});
        }
    }
    async getItemsRented (req,res) {
        try {
            let user = await UserModel.findOne({_id : req.params.userId});
            if(user) {
                return res.send({success : user.itemsRented});
            } else {
                return res.send({error : "Could not find the user"});
            }
        } catch (err) {
            console.log("Could not get the items");
            console.log(err);
        }
    }
}

const userController = new User();
module.exports = userController;