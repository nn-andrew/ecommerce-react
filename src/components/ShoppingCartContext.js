import React, { createContext, useState, useEffect } from 'react';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [shoppingCartItems, setShoppingCartItems] = useState(JSON.parse(localStorage.getItem("shoppingCartItems")) || []);

  useEffect(() => {
    localStorage.setItem("shoppingCartItems", JSON.stringify(shoppingCartItems));
    console.log(shoppingCartItems)
  }, [shoppingCartItems]);

  const addShoppingCartItem = (itemId) => {
    setShoppingCartItems([...shoppingCartItems, itemId]);
  }

  return (
    <ShoppingCartContext.Provider value={{ shoppingCartItems, addShoppingCartItem }}>
      {children}
    </ShoppingCartContext.Provider>
  )
};

export { ShoppingCartContext, ShoppingCartProvider }