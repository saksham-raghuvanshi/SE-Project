const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const { loginCheck } = require("../middlewares/auth");

router.post("/signup",userController.signUp);
router.post("/signin",userController.signIn);
router.get("/get-items-rented/:userId",loginCheck,userController.getItemsRented);

module.exports = router;