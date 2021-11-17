const express = require("express");
const router = express.Router();
const userRoutes = require("../controllers/user/routes");
const loginRoutes = require("../controllers/user/login/routes");
const registerRoutes = require("../controllers/user/register/routes");
const kelasRoutes = require("../controllers/kelas/routes");
const sesiRoutes = require("../controllers/sesi/routes");
const materiRoutes = require("../controllers/materi/routes");
const joinKelasRoutes = require("../controllers/joinKelas/routes");

router.use("/register", registerRoutes);
router.use("/login", loginRoutes);
router.use("/user", userRoutes);
router.use("/kelas", kelasRoutes);
router.use("/join", joinKelasRoutes);
router.use("/kelas/sesi", sesiRoutes);
router.use("/kelas/sesi/materi", materiRoutes);

module.exports = router;
