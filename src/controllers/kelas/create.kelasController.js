const { kelas } = require("../../models");

const service = async function (req, res, next) {
  try {
    const data = req.body;
    const requestDB = await kelas.create(data);
    return res.json({ msg: "Kelas berhasil dibuat", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
