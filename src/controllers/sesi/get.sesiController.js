const { Sessions, Classes } = require("../../models");

const service = async function (req, res, next) {
  try {
    const where = {};
    if (req.params.id) {
      where.ClassId = req.params.id;
    }
    const requestDB = await Sessions.findAll({
      where,
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      include: [
        {
          model: Classes,
          attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        },
      ],

      // where: { ClassesId: Classes.id },
    });
    //Jika tidak ada ID maka tampilkan data semuanya
    if (!req.params.id) return res.json({ msg: "success", data: requestDB });
    //Jika ada ID maka tampilkan satu data
    else {
      if (requestDB.length < 1) {
        return res.status(404).json({ msg: "Sessions tidak ditemukan" });
      } else {
        return res.json({
          msg: `success`,
          data: requestDB,
        });
      }
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
