const express = require("express");
const router = express.Router();
const registerUser = require("./register.controller");

router.post("/", registerUser.service);

module.exports = router;
