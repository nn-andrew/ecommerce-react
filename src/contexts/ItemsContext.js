import React, { createContext } from 'react';

const ItemsContext = createContext();

const ItemsProvider = ({children}) => {
  const itemsMap = new Map();

  const hoodie1 = new Map();
  hoodie1.set('name', 'Hoodie');
  hoodie1.set('imageSource', '/assets/hoodie1.jpg');

  const sweater1 = new Map();
  sweater1.set('name', 'Sweater');
  sweater1.set('imageSource', '/assets/sweater1.jpg');

  itemsMap.set('hoodie1', hoodie1);
  itemsMap.set('sweater1', sweater1);

  return (
    <ItemsContext.Provider value={{itemsMap}}>
      {children}
    </ItemsContext.Provider>
  )
};

export { ItemsContext, ItemsProvider }