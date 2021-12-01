const express = require("express");
const router = express.Router();

const getProfile = require("./get.profileController.js");
const editProfile = require("./edit.profileController.js");
const userJWT = require("../../../middlewares/jwt");

router.get("/", userJWT.checkJWT, getProfile.service);
router.put("/:id", userJWT.checkJWT, editProfile.service);
router.post("/", userJWT.checkJWT, editProfile.service);

module.exports = router;
