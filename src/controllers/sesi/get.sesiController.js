const { Sessions, Materials } = require("../../models");

const service = async function (req, res, next) {
  try {
    const where = {};
    if (req.params.classId) {
      where.ClassId = req.params.classId;
    }
    const requestDB = await Sessions.findAll({
      where,
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      include: [
        {
          model: Materials,
          attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        },
      ],
    });

    return res.json(requestDB);
    //Jika tidak ada ID maka tampilkan data semuanya
    // if (!req.params.id) return res.json({ msg: "success", data: requestDB });
    // else {
    //   if (requestDB.length < 1) {
    //     return res.status(404).json({ msg: "Sessions tidak ditemukan" });
    //   } else {
    //     return res.json({
    //       msg: `success`,
    //       data: requestDB,
    //     });
    //   }
    // }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
