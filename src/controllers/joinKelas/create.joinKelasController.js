const { joinKelas } = require("../../models");

const service = async function (req, res, next) {
  try {
    const data = {
      kelasId: req.body.kelasId,
      userId: req.auth.id,
      roleId: req.body.roleId,
    };
    const requestDB = await joinKelas.create(data);
    return res.json({ msg: "Berhasil bergabung kelas", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
