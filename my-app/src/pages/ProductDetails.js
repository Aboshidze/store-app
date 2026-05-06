import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <Loader />;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} style={{ width: "300px" }} />
      <p>{product.description}</p>
      <h3>${product.price}</h3>

      <p>
        {"⭐".repeat(Math.round(product.rating))} ({product.rating})
      </p>
    </div>
  );
}

export default ProductDetails;
