const { users } = require("../../models");

const service = async function (req, res, next) {
  try {
    const data = req.body;
    const requestDB = await users.create(data);
    return res.json({ msg: "Registrasi berhasil", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
