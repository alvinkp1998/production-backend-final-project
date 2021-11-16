const express = require("express");
const router = express.Router();
const registerRoutes = require("../controllers/register/routes");
const loginRoutes = require("../controllers/login/routes");
const userRoutes = require("../controllers/user/routes");
const kelasRoutes = require("../controllers/kelas/routes");
const sesiRoutes = require("../controllers/sesi/routes");
const materiRoutes = require("../controllers/materi/routes");

router.use("/register", registerRoutes);
router.use("/login", loginRoutes);
router.use("/user", userRoutes);
router.use("/kelas", kelasRoutes);
router.use("/kelas/sesi", sesiRoutes);
router.use("/kelas/sesi/materi", materiRoutes);

module.exports = router;
