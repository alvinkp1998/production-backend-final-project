const { Users } = require("../../../models");

const service = async function (req, res, next) {
  try {
    const where = {};
    if (req.auth) {
      where.id = req.auth.id;
    }
    const requestDB = await Users.findOne({
      where,
      attributes: {
        exclude: ["password", "status", "createdAt", "updatedAt", "deletedAt"],
      },
    });
    return res.json(requestDB);
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
