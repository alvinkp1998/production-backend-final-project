const express = require("express");
const router = express.Router();
const createKelas = require("./create.kelasController");
const deleteKelas = require("./delete.kelasController");
const getKelas = require("./get.kelasController");
const updateKelas = require("./update.kelasController");
const getSesi = require("../sesi/get.sesiController");

router.get("/", getKelas.service);
router.get("/:id", getKelas.service);
router.get("/sesi", getSesi.service);
router.post("/", createKelas.service);
router.put("/:id", updateKelas.service);
router.delete("/:id", deleteKelas.service);

module.exports = router;
