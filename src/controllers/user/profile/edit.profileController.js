const { Users } = require("../../../models");

const service = async function (req, res, next) {
  try {
    const payload = req.body;
    const where = { id: req.params.id };
    const requestDB = await Users.update(payload, { where });
    if (requestDB[0]) {
      return res.json({ msg: "User berhasil diupdate", data: payload });
    } else {
      return res.json({ msg: "User gagal diupdate" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
