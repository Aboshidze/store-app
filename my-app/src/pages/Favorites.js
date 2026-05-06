import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Favorites() {
  const { favorites } = useContext(AppContext);

  return (
    <div>
      <h1>Избранное</h1>
      {favorites.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

export default Favorites;
