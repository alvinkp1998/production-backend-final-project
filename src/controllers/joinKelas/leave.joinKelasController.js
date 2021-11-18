const { JoinClasses } = require("../../models");

const service = async function (req, res, next) {
  try {
    const requestDB = await JoinClasses.destroy({
      where: { ClassId: req.params.id },
    });
    if (requestDB) {
      return res.json({ msg: "Berhasil keluar dari kelas" });
    } else {
      return res.status(404).json({ msg: "Gagal keluar dari kelas" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
