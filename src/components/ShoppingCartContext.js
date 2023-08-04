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

  const removeShoppingCartIndex = (index) => {
    shoppingCartItems.splice(index, 1);
    setShoppingCartItems([...shoppingCartItems]);
  }

  return (
    <ShoppingCartContext.Provider value={{ shoppingCartItems, addShoppingCartItem, removeShoppingCartIndex }}>
      {children}
    </ShoppingCartContext.Provider>
  )
};

export { ShoppingCartContext, ShoppingCartProvider }