const express = require("express");
const router = express.Router();
const createSesi = require("./create.sesiController");
const deleteSesi = require("./delete.sesiController");
const getSesi = require("./get.sesiController");
const updateSesi = require("./update.sesiController");

router.get("/", getSesi.service);
router.get("/:id", getSesi.service);
router.post("/", createSesi.service);
router.put("/:id", updateSesi.service);
router.delete("/:id", deleteSesi.service);

module.exports = router;
