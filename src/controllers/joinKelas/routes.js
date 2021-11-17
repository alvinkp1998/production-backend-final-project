const express = require("express");
const router = express.Router();
const joinKelas = require("./get.joinKelasController");
const createJoinKelas = require("./create.joinKelasController");
const userJWT = require("../../middlewares/jwt");

router.get("/", userJWT.checkJWT, joinKelas.service);
router.post("/", userJWT.checkJWT, createJoinKelas.service);

module.exports = router;
