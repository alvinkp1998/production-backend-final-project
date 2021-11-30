const { Classes } = require("../../models");

const service = async function (req, res, next) {
  try {
    const where = {};
    if (req.params.id) {
      where.id = req.params.id;
    }
    const requestDB = await Classes.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      where,
    });

    return res.json(requestDB);
    // if (!req.params.id) return res.json({ msg: "success", requestDB });
    // else {
    //   if (requestDB.length < 1) {
    //     if (req.params.id == "sesi") {
    //       next();
    //     } else {
    //       return res.status(404).json({ msg: "Classes tidak ditemukan" });
    //     }
    //   } else {
    //     return res.json(requestDB[0]);
    //   }
    // }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
