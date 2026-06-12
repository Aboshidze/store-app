const express = require("express");
const { sequelize, User, Product, Order } = require("./models");

const app = express();
app.use(express.json());

// запуск БД
sequelize.sync();

// ===== USER CRUD =====

// CREATE
app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    throw new Error("Ошибка создания пользователя");
  }
});

// READ
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

// UPDATE
app.put("/users/:id", async (req, res) => {
  await User.update(req.body, { where: { id: req.params.id } });
  res.send("Updated");
});

// DELETE
app.delete("/users/:id", async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.send("Deleted");
});

// ===== PRODUCT CRUD =====

app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    throw new Error("Ошибка создания товара");
  }
});

app.get("/products", async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

app.put("/products/:id", async (req, res) => {
  await Product.update(req.body, { where: { id: req.params.id } });
  res.send("Updated");
});

app.delete("/products/:id", async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.send("Deleted");
});

// ===== ORDER CRUD =====

app.post("/orders", async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.json(order);
  } catch (error) {
    throw new Error("Ошибка создания заказа");
  }
});

app.get("/orders", async (req, res) => {
  const orders = await Order.findAll({ include: [User, Product] });
  res.json(orders);
});

app.put("/orders/:id", async (req, res) => {
  await Order.update(req.body, { where: { id: req.params.id } });
  res.send("Updated");
});

app.delete("/orders/:id", async (req, res) => {
  await Order.destroy({ where: { id: req.params.id } });
  res.send("Deleted");
});

// запуск
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
