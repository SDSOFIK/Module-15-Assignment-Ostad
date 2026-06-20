const express = require("express");
const router = express.Router();
const userController = require("../controllers/Usercontrollers");
const middleware = require("../middlewares/middleware")


router.post("/create-user", userController.createUser);
router.get("/read-user", userController.readUser);
router.put("/update-user/:id", userController.updateUser);
router.delete("/delete-user/:id",userController.deleteUser);
router.get("/all-users", userController.getAllUsers);
router.get("/user/:id", userController.getUserById);
router.post("/login",middleware.loginCheck , userController.loginUser );
router.post("/logout", userController.logoutUser);
router.put("/change-password", userController.changePassword);
router.put("/update-profile", userController.updateProfile);
router.put("/make-admin/:id", userController.makeAdmin);
router.put("/remove-admin/:id", userController.removeAd);
router.get("/search", userController.searchUsers)


module.exports = router