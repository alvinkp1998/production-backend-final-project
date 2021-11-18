const { Materials } = require("../../models");

const service = async function (req, res, next) {
  try {
    const where = { id: req.params.id };
    const requestDB = await Materials.destroy({ where });
    if (requestDB) {
      return res.json({ msg: "Materials berhasil dihapus" });
    } else {
      return res.status(404).json({ msg: "Materials gagal dihapus" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
