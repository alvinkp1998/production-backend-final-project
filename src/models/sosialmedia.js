"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sosialMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ sosialMedia, users }) {
      sosialMedia.hasOne(users);
    }
  }
  sosialMedia.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      instagram: { type: DataTypes.STRING, allowNull: true },
      linkedin: { type: DataTypes.STRING, allowNull: true },
      twitter: { type: DataTypes.STRING, allowNull: true },
      facebook: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      modelName: "sosialMedia",
    }
  );
  return sosialMedia;
};
