const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Product", {
    title: DataTypes.STRING,
    price: DataTypes.FLOAT,
  });
};
