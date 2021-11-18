const { JoinClasses } = require("../../models");

const service = async function (req, res, next) {
  try {
    const data = {
      ClassId: req.body.classId,
      UserId: req.auth.id,
      RoleId: req.body.roleId,
    };
    const requestDB = await JoinClasses.create(data);
    return res.json({ msg: "Berhasil bergabung kelas", data: requestDB });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
