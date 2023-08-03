import React, { useContext } from 'react';
import { FavoriteContext } from './FavoriteContext';

const Card = (props) => {
  const { title, image_directory } = props;
  const { favoritedItems, toggleFavorite } = useContext(FavoriteContext);
  const isFavorited = favoritedItems.includes(title);

  const handleFavoriteToggle = () => {
    toggleFavorite(title);
  }

  return (
    <a>
      <div className="card">
        <img src={image_directory} className="card-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-light">{title}</h5>
          <p className="card-text text-light">$40.00 USD</p>
            <button onClick={handleFavoriteToggle} className={`btn rounded-circle ${isFavorited ? "btn-danger" : "btn-secondary"}`} type="button">
              ♥
            </button>
        </div>
      </div>
    </a>
  );
};

export default Card;