const express = require("express");
const router = express.Router();

const userController = require("./users.controller");

router.get("/", userController.index);
router.post("/signup", userController.signUp);
router.get("/checkuser/:username", userController.checkuser);

module.exports = router;
