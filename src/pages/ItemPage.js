import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ItemsContext } from '../contexts/ItemsContext';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import { FavoriteButton } from '../components/FavoriteButton';

const ItemPage = () => {
  const {id} = useParams();
  const { itemsMap } = useContext(ItemsContext);
  const { addShoppingCartItem } = useContext(ShoppingCartContext);
  const [selectedSize, setSelectedSize] = useState('M');

  const handleAddToShoppingCart = (size) => {
    addShoppingCartItem(id + "," + selectedSize);
  }

  const handleSelectSize = (size) => {
    setSelectedSize(size);
  }

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-4">
          <img src={`${itemsMap.get(id).get("imageSource")}`} className="img-fluid" />
        </div>
        <div className="col-8">
          <div className="row pb-1">
            <div className="col">
              <h1 className="text-custom-light">{itemsMap.get(id).get("name")}</h1>
            </div>
            <div className="col m-auto">
              <FavoriteButton itemId={id} />
            </div>
          </div>
          <div className="row pb-5">
            <h4 className="text-custom-light">${itemsMap.get(id).get("price").toFixed(2)} USD</h4>
          </div>
          <div className="row pb-5">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="sizeDropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedSize}
              </button>
              <ul className="dropdown-menu" aria-labelledby="sizeDropdownButton">
                <li><a className="dropdown-item" onClick={() => handleSelectSize('S')}>S</a></li>
                <li><a className="dropdown-item" onClick={() => handleSelectSize('M')}>M</a></li>
                <li><a className="dropdown-item" onClick={() => handleSelectSize('L')}>L</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <button className="btn btn-secondary w-50" onClick={() => handleAddToShoppingCart(selectedSize)}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;