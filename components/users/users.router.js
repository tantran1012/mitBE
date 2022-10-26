const express = require("express");
const router = express.Router();

const userController = require("./users.controller");

router.get("/", userController.index);
router.post("/signup", userController.signUp);
router.get("/checkuser/:username", userController.checkuser);

router.all("/", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.all("/signup", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.all("/checkuser/:username", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

module.exports = router;
