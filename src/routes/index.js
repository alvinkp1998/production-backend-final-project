const express = require("express");
const router = express.Router();
const registerRoutes = require("../controllers/register/routes");
const loginRoutes = require("../controllers/login/routes");

router.use("/register", registerRoutes);
router.use("/login", loginRoutes);

module.exports = router;
