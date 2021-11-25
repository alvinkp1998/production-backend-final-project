const { Materials } = require("../../models");

const service = async function (req, res, next) {
  try {
    const where = { SessionId: req.params.id };
    const data = req.body;
    const requestDB = await Materials.create(data, where);
    return res.json({ msg: "Materials berhasil dibuat", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
