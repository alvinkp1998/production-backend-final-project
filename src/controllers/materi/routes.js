const express = require("express");
const router = express.Router();
const createMateri = require("./create.materiController");
const deleteMateri = require("./delete.materiController");
const getMateri = require("./get.materiController");
const updateMateri = require("./update.materiController");

router.get("/", getMateri.service);
router.get("/:id", getMateri.service);
router.post("/", createMateri.service);
router.put("/:id", updateMateri.service);
router.delete("/:id", deleteMateri.service);

module.exports = router;
