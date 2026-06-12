const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const User = require("./User")(sequelize);
const Product = require("./Product")(sequelize);
const Order = require("./Order")(sequelize);

// связи
User.hasMany(Order);
Order.belongsTo(User);

Order.belongsToMany(Product, { through: "OrderProducts" });
Product.belongsToMany(Order, { through: "OrderProducts" });

module.exports = { sequelize, User, Product, Order };
