const { Users } = require("../../../models");
const { body } = require("express-validator");

const service = async function (req, res, next) {
  try {
    const data = req.body;
    const requestDB = await Users.create(data);
    return res.json({ msg: "Registrasi berhasil", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

const validation = [
  body("email")
    .notEmpty()
    .withMessage("Email tidak boleh kosong")
    .isEmail()
    .withMessage("Email tidak valid")
    .custom((value) => {
      return Users.findOne({ where: { email: value } }).then((data) => {
        if (data) {
          return Promise.reject("Email sudah digunakan");
        }
      });
    }),
  body("password")
    .notEmpty()
    .withMessage("Password tidak boleh kosong")
    .isLength({ min: 4 }),
];

module.exports = { service, validation };
