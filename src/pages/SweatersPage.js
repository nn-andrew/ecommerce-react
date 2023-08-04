import React from 'react';
import CardGrid from '../components/CardGrid';

const SweatersPage = () => {
  return (
    <div className="container text-custom-light">
      <div className="row text-center">
        <h1>Sweaters</h1>
      </div>
      <div className="row">
        <CardGrid itemIds={["sweater1"]} />
      </div>
    </div>
  );
};

export default SweatersPage