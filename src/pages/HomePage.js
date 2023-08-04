import React from 'react';
import Navbar from '../components/Navbar';
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
        <CardGrid />
      </div>
    </div>
  );
};

export default HomePage;