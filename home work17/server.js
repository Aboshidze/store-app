const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3001;

// подключаем EJS
app.set("view engine", "ejs");

// подключаем статические файлы (CSS)
app.use(express.static(path.join(__dirname, "public")));

// Главная страница
app.get("/", (req, res) => {
  res.render("home");
});

// Страница товаров
app.get("/products", async (req, res) => {
  try {
    const response = await axios.get("https://dummyjson.com/products");

    res.render("products", {
      products: response.data.products,
    });
  } catch (error) {
    res.status(500).send("Ошибка загрузки товаров");
  }
});

// Детальная страница товара
app.get("/product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);

    res.render("product", {
      product: response.data,
    });
  } catch (error) {
    res.status(500).send("Ошибка загрузки товара");
  }
});

// запуск сервера
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
