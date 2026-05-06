import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import { AppContext } from "../context/AppContext";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const { addToFavorites } = useContext(AppContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <h1>Товары</h1>

      <input
        placeholder="Поиск..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products
          .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
          .map((product) => (
            <div
              key={product.id}
              style={{ border: "1px solid #ccc", padding: "10px" }}
            >
              <img src={product.thumbnail} style={{ width: "150px" }} />

              <h4>
                <Link to={`/products/${product.id}`}>{product.title}</Link>
              </h4>

              <p>${product.price}</p>

              <p>
                {"⭐".repeat(Math.round(product.rating))} ({product.rating})
              </p>

              <button onClick={() => addToFavorites(product)}>❤️</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;
