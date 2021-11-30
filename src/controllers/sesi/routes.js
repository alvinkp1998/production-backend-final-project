const express = require("express");
const router = express.Router();
const createSesi = require("./create.sesiController");
const deleteSesi = require("./delete.sesiController");
const getSesi = require("./get.sesiController");
const updateSesi = require("./update.sesiController");
const userJWT = require("../../middlewares/jwt");

router.get("/", userJWT.checkJWT, getSesi.service);
router.get("/:classId", userJWT.checkJWT, getSesi.service);
router.post("/", userJWT.checkJWT, createSesi.service);
router.put("/:id", userJWT.checkJWT, updateSesi.service);
router.delete("/:id", userJWT.checkJWT, deleteSesi.service);

module.exports = router;
