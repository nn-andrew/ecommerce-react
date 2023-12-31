import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemsContext } from '../contexts/ItemsContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const ShoppingCartPage = () => {
  const { itemsMap } = useContext(ItemsContext);
  const { shoppingCartItems, removeShoppingCartIndex } = useContext(ShoppingCartContext);

  const handleRemoveShoppingCartIndex = (index) => {
    removeShoppingCartIndex(index);
  };
  
  const total = () => {
    var res = 0;

    for (let i = 0; i < shoppingCartItems.length; i++) {
      res += itemsMap.get(shoppingCartItems[i].split(',')[0]).get("price");
    }

    return res;
  };

  return (
    <div className="container p-5 text-custom-light">
      <div className="row">
        <h1>
          Shopping Cart
        </h1>
      </div>
      <div className="row">
        <div className="col">  
          {shoppingCartItems.map((item, index) => (
            <div className="row align-items-center">
              <div className="col">
                <Link to={`../item/${item.split(',')[0]}`}>
                  <img className="img-fluid" src={`${itemsMap.get(item.split(',')[0]).get("imageSource")}`} />
                </Link>
              </div>
              <div className="col">
                <div className="row">
                  {itemsMap.get(item.split(',')[0]).get("name")}
                </div>
                <div className="row">
                  {item.split(',')[1]}
                </div>
                <div className="row">
                  {"$" + itemsMap.get(item.split(',')[0]).get("price").toFixed(2) + " USD"}
                </div>
              </div>
              <div className="col">
                <button className="btn btn-secondary" onClick={() => handleRemoveShoppingCartIndex(index)}>
                  <img className="icon" src="../assets/remove.png" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="col">
          <div className="p-5" id="checkout-panel">
            <div className="row">
              <div className="col text-start">
                <p>Order value</p>
              </div>
              <div className="col text-end">
                <p>{"$" + total().toFixed(2) + " USD"}</p>
              </div>
            </div>
            <div className="row">
              <div className="col text-start">
                <p>Shipping</p>
              </div>
              <div className="col text-end">
                <p>FREE</p>
              </div>
            </div>
            <div className="row">
              <button className="btn btn-success disabled">Continue to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
