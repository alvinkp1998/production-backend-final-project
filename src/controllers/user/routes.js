const express = require("express");
const router = express.Router();
const getUser = require("./get.userController");

router.get("/", getUser.service);
router.get("/:id", getUser.service);

module.exports = router;
