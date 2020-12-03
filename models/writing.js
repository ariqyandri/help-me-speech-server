"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class writing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      writing.belongsTo(models.user);
      writing.belongsTo(models.category);
      writing.hasMany(models.image);
    }
  }
  writing.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
      isPrivate: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      imageUrl: DataTypes.STRING,
      videoUrl: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, allowNull: false },
      categoryId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "writing",
    }
  );
  return writing;
};
