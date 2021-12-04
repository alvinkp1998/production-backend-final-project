const express = require("express");
const router = express.Router();
const userRoutes = require("../controllers/user/routes");
const registerRoutes = require("../controllers/user/register/routes");
const loginRoutes = require("../controllers/user/login/routes");
const kelasRoutes = require("../controllers/kelas/routes");
const joinKelasRoutes = require("../controllers/joinKelas/routes");
const sesiRoutes = require("../controllers/sesi/routes");
const materiRoutes = require("../controllers/materi/routes");
const profileRoutes = require("../controllers/user/profile/routes");
const presensiRoutes = require("../controllers/presensi/routes");

router.use("/register", registerRoutes);
router.use("/login", loginRoutes);
router.use("/user", userRoutes);
router.use("/kelas", kelasRoutes);
router.use("/join", joinKelasRoutes);
router.use("/sesi", sesiRoutes);
router.use("/materi", materiRoutes);
router.use("/profile", profileRoutes);
router.use("/presensi", presensiRoutes);

module.exports = router;
