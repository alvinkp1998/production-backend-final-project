const { kelas, joinKelas } = require("../../models");

const service = async function (req, res, next) {
  try {
    const data = await kelas.findAll({
      include: { model: joinKelas, where: { userId: req.auth.id } },
    });

    return res.json({ msg: "sukses", data: data });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
