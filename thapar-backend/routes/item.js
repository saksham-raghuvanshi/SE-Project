const express = require("express");
const router = express.Router();
const itemController = require("../controllers/item");
const { loginCheck } = require("../middlewares/auth");

router.get("/get-all-items/:userId",loginCheck,itemController.getAllItems);
router.post("/add-item",loginCheck,itemController.addItem);
router.post("/rent-item",loginCheck,itemController.rentItem);
router.post("/return-item",loginCheck,itemController.returnItem);
router.delete("/delete-item/:itemId",loginCheck,itemController.deleteItem);

module.exports = router;