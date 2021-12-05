const { Users } = require("../../../models");
const { createJWT } = require("../../../middlewares/jwt");
const { compareSync } = require("bcrypt");
const { body } = require("express-validator");

const service = async function (req, res, next) {
  try {
    const user = await Users.findOne({
      where: { email: req.body.email },
    });
    const validUser = compareSync(req.body.password, user.password);
    if (validUser) return res.json({ msg: "success", token: createJWT(user) });
    else {
      return res.status(404).json({ msg: "Email atau password tidak sesuai" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

const validation = [
  body("email").notEmpty().withMessage("Email tidak boleh kosong"),
  body("password").notEmpty().withMessage("Password tidak boleh kosong"),
];

module.exports = { service, validation };
