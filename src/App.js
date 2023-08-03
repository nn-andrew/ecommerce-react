import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HelloWorld from './components/HelloWorld';
import Hero from './components/Hero';
import CreateAccountStrip from './components/CreateAccountStrip';
import CardGrid from './components/CardGrid';
import { FavoriteProvider } from './components/FavoriteContext';

function App() {
  return (
    <Router>
      <FavoriteProvider>
        <div>
          <Navbar />
          {/* <div className="container"> */}
            <Hero />
            {/* <CreateAccountStrip /> */}
            <CardGrid />
          {/* </div> */}
        </div>
        {/* <a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a> */}
      </FavoriteProvider>
    </Router>
  );
}

export default App;

/*
technologies/concepts used:

react context
hooks
components
*/