import React from 'react';
import CardGrid from '../components/CardGrid';

const HoodiesPage = () => {
  return (
    <div className="container text-custom-light">
      <div className="row text-center">
        <h1>Hoodies</h1>
      </div>
      <div className="row">
        <CardGrid itemIds={["hoodie1", "hoodie2", "hoodie3"]} />
      </div>
    </div>
  );
};

export default HoodiesPage