const express = require("express");
const router = express.Router();
const createKelas = require("./create.kelasController");
const deleteKelas = require("./delete.kelasController");
const getKelas = require("./get.kelasController");
const updateKelas = require("./update.kelasController");
const getSesi = require("../sesi/get.sesiController");
const adminJWT = require("../../middlewares/jwt");

router.get("/", getKelas.service);
router.get("/:id", getKelas.service);
router.get("/sesi", getSesi.service);
router.post("/", adminJWT.checkJWTAdmin, createKelas.service);
router.put("/:id", adminJWT.checkJWTAdmin, updateKelas.service);
router.delete("/:id", adminJWT.checkJWTAdmin, deleteKelas.service);

module.exports = router;
