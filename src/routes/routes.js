const express = require("express");
const router = express.Router();
const userController = require("../controllers/Usercontrollers");


router.post("/create-user", userController.createUser);
router.get("/read-user", userController.readUser);
router.put("/update-user/:id", userController.updateUser);
router.delete("/delete-user/:id",userController.deleteUser);
router.get("/all-users", userController.getAllUsers);
router.get("/user/:id", userController.getUserById)


module.exports = router