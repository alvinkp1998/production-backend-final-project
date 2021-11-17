"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class joinKelas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ joinKelas, sesi, role, kelas, users }) {
      joinKelas.belongsToMany(sesi, { through: "presensi" });
      joinKelas.belongsTo(role);
      joinKelas.belongsTo(kelas, { foreignKey: "kelasId" });
      joinKelas.belongsTo(users);
    }
  }
  joinKelas.init(
    {
      userId: {
        type: DataTypes.UUID,
      },
      kelasId: {
        type: DataTypes.INTEGER,
      },
      roleId: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "joinKelas",
    }
  );
  return joinKelas;
};
