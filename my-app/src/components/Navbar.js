import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const { toggleTheme } = useContext(AppContext);

  return (
    <nav>
      <Link to="/">Главная</Link> | <Link to="/products">Товары</Link> |{" "}
      <Link to="/favorites">Избранное</Link> | <Link to="/about">О нас</Link> |{" "}
      <button onClick={toggleTheme}>🌙</button>
    </nav>
  );
}

export default Navbar;
