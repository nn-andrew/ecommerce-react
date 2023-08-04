import React, { createContext } from 'react';

const ItemsContext = createContext();

const ItemsProvider = ({children}) => {
  const itemsMap = new Map();

  const hoodie1 = new Map();
  hoodie1.set('name', 'Hoodie Grey');
  hoodie1.set('imageSource', '/assets/hoodie1.jpg');
  hoodie1.set('price', 40);

  const hoodie2 = new Map();
  hoodie2.set('name', 'Hoodie Green');
  hoodie2.set('imageSource', '/assets/hoodie2.jpg');
  hoodie2.set('price', 50);

  const hoodie3 = new Map();
  hoodie3.set('name', 'Hoodie Pink');
  hoodie3.set('imageSource', '/assets/hoodie3.jpg');
  hoodie3.set('price', 50);

  const sweater1 = new Map();
  sweater1.set('name', 'Sweater Grey');
  sweater1.set('imageSource', '/assets/sweater1.jpg');
  sweater1.set('price', 35);

  itemsMap.set('hoodie1', hoodie1);
  itemsMap.set('hoodie2', hoodie2);
  itemsMap.set('hoodie3', hoodie3);
  itemsMap.set('sweater1', sweater1);

  return (
    <ItemsContext.Provider value={{itemsMap}}>
      {children}
    </ItemsContext.Provider>
  )
};

export { ItemsContext, ItemsProvider }