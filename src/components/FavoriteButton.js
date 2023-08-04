import React, { useContext } from 'react';
import { FavoriteContext } from '../contexts/FavoriteContext';

const FavoriteButton = (props) => {
  const { itemId } = props;
  const { favoritedItems, toggleFavorite } = useContext(FavoriteContext);
  const isFavorited = favoritedItems.includes(itemId);

  const handleFavoriteToggle = (event) => {
    event.preventDefault();
    toggleFavorite(itemId);
  };

  return (
    <button onClick={handleFavoriteToggle} className={`btn rounded-circle ${isFavorited ? "btn-danger" : "btn-secondary"}`} type="button">
      ♥
    </button>
  );
};

export { FavoriteButton };