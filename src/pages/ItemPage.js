import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ItemsContext } from '../contexts/ItemsContext';
import { ShoppingCartContext } from '../components/ShoppingCartContext';

const ItemPage = () => {
  const {id} = useParams();
  const { itemsMap } = useContext(ItemsContext);
  const { addShoppingCartItem } = useContext(ShoppingCartContext);

  const handleAddToShoppingCart = () => {
    addShoppingCartItem(id);
  }

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-4">
          <img src={`${itemsMap.get(id).get("imageSource")}`} className="img-fluid" />
        </div>
        <div className="col-8">
          <div className="row">
            <h1 className="text-custom-light pb-1">Hoodie</h1>
          </div>
          <div className="row">
            <h4 className="text-custom-light pb-5">$40.00 USD</h4>
          </div>
          <div className="row">
            <button className="btn btn-secondary w-50" onClick={handleAddToShoppingCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;