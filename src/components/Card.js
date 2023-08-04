import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../contexts/FavoriteContext';
import { ItemsContext } from '../contexts/ItemsContext';
import { FavoriteButton } from './FavoriteButton';

const Card = (props) => {
  const { id } = props;
  const { itemsMap } = useContext(ItemsContext);

  return (
    <Link to={`/item/${id}`}>
      <div className="card">
        <img src={itemsMap.get(id).get('imageSource')} className="card-img" alt="..." />
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h5 className="card-title text-light">{itemsMap.get(id).get('name')}</h5>
              <p className="card-text text-light">{"$" + itemsMap.get(id).get("price").toFixed(2) + " USD"}</p>
            </div>
            <div className="col-3">
              <FavoriteButton itemId={id} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;