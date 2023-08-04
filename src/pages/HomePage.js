import React from 'react';
import Hero from '../components/Hero';
import CardGrid from '../components/CardGrid';

const HomePage = () => {
  return (
    <div className="container text-custom-light">
      <div className="row">
        <Hero />
      </div>
      <div className="row text-center">
        <h1>New arrivals</h1>
      </div>
      <div className="row">
        <CardGrid itemIds={["hoodie1", "hoodie2", "sweater1"]} />
      </div>
    </div>
  );
};

export default HomePage;