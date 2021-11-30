"use strict";
const { Model } = require("sequelize");
const { genSaltSync, hashSync } = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Users, Address, MediaSocial, Classes, JoinClasses }) {
      Users.belongsTo(Address);
      Users.belongsTo(MediaSocial);
      Users.belongsToMany(Classes, { through: "JoinClasses" });
      // Users.hasMany(JoinClasses);
    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      nama: DataTypes.STRING,
      tempatLahir: DataTypes.STRING,
      tanggalLahir: DataTypes.DATEONLY,
      foto: DataTypes.STRING,
      noHp: DataTypes.STRING(12),
      email: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue("password", hashSync(value, genSaltSync(10)));
        },
      },
      pendidikanTerakhir: DataTypes.STRING,
      institusi: DataTypes.STRING,
      pekerjaan: DataTypes.STRING,
      status: DataTypes.ENUM(["admin", "user"]),
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
