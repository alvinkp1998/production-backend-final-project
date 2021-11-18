const { Users } = require("../../models");

const service = async function (req, res, next) {
  try {
    const where = {};
    if (req.auth.id) {
      where.id = req.auth.id;
    }
    console.log(where);
    const requestDB = await Users.findAll({
      where,
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
    });
    if (!req.auth) return res.json({ msg: "data semua user", data: requestDB });
    else {
      return res.json({
        msg: "data berhasil diterima.",
        data: requestDB[0],
      });
    }
    // else {
    //   if (requestDB.length < 1) {
    //     return res.status(404).json({ msg: "User tidak ditemukan" });
    //   } else {

    //   }
    // }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
