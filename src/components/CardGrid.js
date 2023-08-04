import React from 'react';
import Card from './Card';

const CardGrid = (props) => {
  const { itemIds } = props;

  return (
    <div className="row row-cols-1 row-cols-md-3">
      {itemIds.map((itemId) => (
        <div className="col">
          <Card id={itemId} />
        </div>
      ))}
    </div>
  );
};

export default CardGrid;