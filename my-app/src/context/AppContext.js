import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const toggleTheme = () => setDark(!dark);

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  const addToFavorites = (item) => {
    setFavorites((prev) =>
      prev.find((i) => i.id === item.id) ? prev : [...prev, item],
    );
  };

  return (
    <AppContext.Provider
      value={{ dark, toggleTheme, favorites, addToFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
};
