import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemsContext } from '../contexts/ItemsContext';
import { FavoriteContext } from '../components/FavoriteContext';

const FavoritedItemsPage = () => {
  const { itemsMap } = useContext(ItemsContext);
  const { favoritedItems, removeFavoritedIndex } = useContext(FavoriteContext);

  const handleRemoveFavoritedIndex = (index) => {
    removeFavoritedIndex(index);
  };

  return (
    <div className="container p-5 text-custom-light">
      <div className="row">
        <h1>
          Favorited Items
        </h1>
      </div>
      <div className="row">
        <div className="col">  
          {favoritedItems.map((item, index) => (
            <div className="row align-items-center">
              <div className="col-2">
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
                <button className="btn btn-secondary" onClick={() => handleRemoveFavoritedIndex(index)}>
                  x
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritedItemsPage;