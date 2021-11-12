const express = require("express");
const router = express.Router();
const registerAPI = require("./register.controller");

router.post("/", registerAPI.service);

module.exports = router;
