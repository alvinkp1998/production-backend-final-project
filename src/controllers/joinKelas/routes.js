const express = require("express");
const router = express.Router();
const getJoinKelas = require("./get.joinKelasController");
const createJoinKelas = require("./create.joinKelasController");
const leaveJoinKelas = require("./leave.joinKelasController");
const userJWT = require("../../middlewares/jwt");

router.get("/", userJWT.checkJWT, getJoinKelas.service);
router.post("/", userJWT.checkJWT, createJoinKelas.service);
router.delete("/:id", userJWT.checkJWT, leaveJoinKelas.service);

module.exports = router;
