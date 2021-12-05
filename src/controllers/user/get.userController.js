const { Users, Classes } = require("../../models");

const service = async function (req, res, next) {
  try {
    const where = {};
    if (req.auth) {
      const requestDB = await Users.findAll({
        where,
        attributes: {
          exclude: ["password", "createdAt", "updatedAt", "deletedAt"],
        },
        include: {
          model: Classes,
          attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        },
      });
      return res.json({
        msg: "data user berhasil diterima.",
        data: requestDB[0],
      });
    } else {
      const requestDB = await Users.findAll({
        where,
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      });
      return res.json({ msg: "data semua user", data: requestDB });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
