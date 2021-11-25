const { Classes, JoinClasses, Users, Roles } = require("../../models");

const service = async function (req, res, next) {
  try {
    if (req.params.id) {
      const where = {};
      if (req.params.id) {
        where.id = req.params.id;
      }
      const data = await Users.findAll({
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        include: {
          model: Classes,
          where,
          attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        },
      });

      return res.json({ msg: "sukses", data: data });
    } else {
      const data = await JoinClasses.findAll({
        where: { UserId: req.auth.id },
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        include: {
          model: Classes,
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"],
          },
        },
      });
      return res.json({ msg: "sukses", data: data });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };
