import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteContext } from './FavoriteContext';
import { ItemsContext } from '../contexts/ItemsContext';

const Card = (props) => {
  const { id } = props;
  const { favoritedItems, toggleFavorite } = useContext(FavoriteContext);
  const { itemsMap } = useContext(ItemsContext);
  const isFavorited = favoritedItems.includes(id);

  const handleFavoriteToggle = (event) => {
    event.preventDefault();
    toggleFavorite(id);
  }

  return (
    <Link to={`/item/${id}`}>
      <div className="card">
        <img src={itemsMap.get(id).get('imageSource')} className="card-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-light">{itemsMap.get(id).get('name')}</h5>
          <p className="card-text text-light">{"$" + itemsMap.get(id).get("price").toFixed(2) + " USD"}</p>
            <button onClick={handleFavoriteToggle} className={`btn rounded-circle ${isFavorited ? "btn-danger" : "btn-secondary"}`} type="button">
              ♥
            </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;