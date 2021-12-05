const { Classes } = require("../../models");

const service = async function (req, res, next) {
  try {
    const where = {};
    if (req.params.id) {
      where.id = req.params.id;
      const requestDB = await Classes.findAll({
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        where,
      });
      return res.json(requestDB[0]);
    } else {
      const requestDB = await Classes.findAll({
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        where,
      });
      return res.json(requestDB);
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
