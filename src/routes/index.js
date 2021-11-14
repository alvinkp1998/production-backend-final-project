const express = require("express");
const router = express.Router();
const registerRoutes = require("../controllers/register/routes");
const loginRoutes = require("../controllers/login/routes");
const userRoutes = require("../controllers/user/routes");

router.use("/register", registerRoutes);
router.use("/login", loginRoutes);
router.use("/user", userRoutes);

module.exports = router;
