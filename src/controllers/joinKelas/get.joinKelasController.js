const { Classes, JoinClasses } = require("../../models");

const service = async function (req, res, next) {
  try {
    const data = await JoinClasses.findAll({
      where: { UserId: req.auth.id },
      attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      include: {
        model: Classes,
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      },
    });

    return res.json({ msg: "sukses", data: data });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
