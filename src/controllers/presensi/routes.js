const express = require("express");
const router = express.Router();
const presensi = require("./create.presensiController");
const getPresensi = require("./get.presensiController");
const userJWT = require("../../middlewares/jwt");

router.post("/", userJWT.checkJWT, presensi.service);
router.get("/", userJWT.checkJWT, getPresensi.service);

module.exports = router;
