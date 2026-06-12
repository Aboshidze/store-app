const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3001;

// GET с параметром
app.get("/product/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);

    const product = response.data;

    // возвращаем только нужные поля
    const result = {
      id: product.id,
      title: product.title,
      price: product.price,
      rating: product.rating,
    };

    res.json(result);
  } catch (error) {
    // ✅ правильная обработка ошибки
    return res.status(500).json({
      error: "Ошибка при получении данных с API",
    });
  }
});

// запуск сервера
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
