import React, { createContext, useState, useEffect } from 'react';

const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
  const [favoritedItems, setFavoritedItems] = useState(JSON.parse(localStorage.getItem("favoritedItems")) || []);

  useEffect(() => {
    localStorage.setItem("favoritedItems", JSON.stringify(favoritedItems));
    console.log(favoritedItems)
  }, [favoritedItems]);

  const toggleFavorite = (itemName) => {
    if (favoritedItems.includes(itemName)) {
      setFavoritedItems(favoritedItems.filter((item) => item !== itemName));
    } else {
      setFavoritedItems([...favoritedItems, itemName]);
    }
  }

  return (
    <FavoriteContext.Provider value={{ favoritedItems, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
};

export { FavoriteContext, FavoriteProvider }