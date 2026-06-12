const express = require("express");
const mongoose = require("mongoose");

const User = require("./models/User");
const Post = require("./models/Post");

const app = express();
app.use(express.json());

// ✅ ПОДКЛЮЧЕНИЕ (НЕ SRV — РАБОТАЕТ БЕЗ ОШИБОК)
mongoose
  .connect(
    "mongodb://abyl:Aboshidze0204@ac-jlogfww-shard-00-00.06jutcf.mongodb.net:27017,ac-jlogfww-shard-00-01.06jutcf.mongodb.net:27017,ac-jlogfww-shard-00-02.06jutcf.mongodb.net:27017/blogDB?ssl=true&replicaSet=atlas-10dpi5-shard-0&authSource=admin&appName=Aboshidze",
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err));

// ===== USER CRUD =====

app.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Ошибка создания пользователя" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Ошибка получения пользователей" });
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.send("User updated");
  } catch (error) {
    res.status(500).json({ error: "Ошибка обновления пользователя" });
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("User deleted");
  } catch (error) {
    res.status(500).json({ error: "Ошибка удаления пользователя" });
  }
});

// ===== POST CRUD =====

app.post("/posts", async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Ошибка создания поста" });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().populate("user").populate("comments.user");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Ошибка получения постов" });
  }
});

app.patch("/posts/:id", async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.params.id, req.body);
    res.send("Post updated");
  } catch (error) {
    res.status(500).json({ error: "Ошибка обновления поста" });
  }
});

app.delete("/posts/:id", async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.send("Post deleted");
  } catch (error) {
    res.status(500).json({ error: "Ошибка удаления поста" });
  }
});

// ===== COMMENTS =====

app.post("/posts/:id/comments", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ error: "Пост не найден" });
    }

    post.comments.push(req.body);
    await post.save();

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: "Ошибка добавления комментария" });
  }
});

// ===== SERVER =====

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
