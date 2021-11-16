const { sesi } = require("../../models");

const service = async function (req, res, next) {
  try {
    const data = req.body;
    const requestDB = await sesi.create(data);
    return res.json({ msg: "Sesi berhasil dibuat", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
