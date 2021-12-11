const express = require("express");
const router = express.Router();
const getUser = require("./get.userController");
const userJWT = require("../../middlewares/jwt");

router.get("/", getUser.service);
router.get("/me", userJWT.checkJWT, getUser.service);

module.exports = router;
