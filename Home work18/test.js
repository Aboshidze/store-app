const axios = require("axios");

async function test() {
  try {
    console.log("=== CREATE ===");

    // ===== USER CREATE =====
    const user = await axios.post("http://localhost:3001/users", {
      name: "Abyl",
      email: "abyl@gmail.com",
    });
    console.log("USER CREATED:", user.data);

    // ===== PRODUCT CREATE =====
    const product = await axios.post("http://localhost:3001/products", {
      title: "Phone",
      price: 1000,
    });
    console.log("PRODUCT CREATED:", product.data);

    // ===== ORDER CREATE =====
    const order = await axios.post("http://localhost:3001/orders", {
      total: 1000,
      UserId: user.data.id,
    });
    console.log("ORDER CREATED:", order.data);

    console.log("\n=== READ ===");

    // ===== GET USERS =====
    const users = await axios.get("http://localhost:3001/users");
    console.log("USERS:", users.data);

    // ===== GET PRODUCTS =====
    const products = await axios.get("http://localhost:3001/products");
    console.log("PRODUCTS:", products.data);

    // ===== GET ORDERS =====
    const orders = await axios.get("http://localhost:3001/orders");
    console.log("ORDERS:", orders.data);

    console.log("\n=== UPDATE ===");

    // ===== UPDATE USER =====
    await axios.put(`http://localhost:3001/users/${user.data.id}`, {
      name: "Updated Abyl",
    });
    console.log("USER UPDATED");

    // ===== UPDATE PRODUCT =====
    await axios.put(`http://localhost:3001/products/${product.data.id}`, {
      price: 2000,
    });
    console.log("PRODUCT UPDATED");

    console.log("\n=== DELETE ===");

    // ===== DELETE PRODUCT =====
    await axios.delete(`http://localhost:3001/products/${product.data.id}`);
    console.log("PRODUCT DELETED");

    // ===== DELETE USER =====
    await axios.delete(`http://localhost:3001/users/${user.data.id}`);
    console.log("USER DELETED");
  } catch (error) {
    console.log("ERROR:", error.message);
  }
}

test();
