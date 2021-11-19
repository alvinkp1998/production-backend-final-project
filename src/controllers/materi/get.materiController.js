const { Materials, Sessions } = require("../../models");

const service = async function (req, res, next) {
  try {
    const where = {};
    if (req.params.id) {
      where.SessionId = req.params.id;
    }
    const requestDB = await Materials.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      include: [
        {
          model: Sessions,
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"],
          },
        },
      ],
      where,
    });
    if (!req.params.id) return res.json({ msg: "success", data: requestDB });
    else {
      if (requestDB.length < 1) {
        return res.status(404).json({ msg: "Materials tidak ditemukan" });
      } else {
        return res.json(requestDB);
      }
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
