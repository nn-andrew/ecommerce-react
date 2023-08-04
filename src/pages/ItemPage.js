import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ItemsContext } from '../contexts/ItemsContext';
import { ShoppingCartContext } from '../components/ShoppingCartContext';

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
            <h1 className="text-custom-light">Hoodie</h1>
          </div>
          <div className="row pb-5">
            <h4 className="text-custom-light">$40.00 USD</h4>
          </div>
          <div className="row pb-5">
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="sizeDropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
                {selectedSize}
              </button>
              <ul class="dropdown-menu" aria-labelledby="sizeDropdownButton">
                <li><a class="dropdown-item" onClick={() => handleSelectSize('S')}>S</a></li>
                <li><a class="dropdown-item" onClick={() => handleSelectSize('M')}>M</a></li>
                <li><a class="dropdown-item" onClick={() => handleSelectSize('L')}>L</a></li>
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