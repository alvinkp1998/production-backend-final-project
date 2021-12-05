const { Materials, Sessions, Classes } = require("../../models");

const service = async function (req, res, next) {
  try {
    const where = {};
    if (req.params.sessionId) {
      where.SessionId = req.params.sessionId;
    }
    const requestDB = await Materials.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      include: {
        model: Sessions,
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      },
      where,
    });
    return res.json(requestDB);
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
