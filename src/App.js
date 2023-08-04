import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import { FavoriteProvider } from './components/FavoriteContext';
import { ShoppingCartProvider } from './components/ShoppingCartContext';
import MainLayout from './layouts/MainLayout';
import { ItemsProvider } from './contexts/ItemsContext'

function App() {
  return (
    <ItemsProvider>
      <ShoppingCartProvider>
        <FavoriteProvider>
          <MainLayout>
            <Router>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/item/:id" element={<ItemPage />} />
              </Routes>
            </Router>
          </MainLayout>
        </FavoriteProvider>
      </ShoppingCartProvider>
    </ItemsProvider>
  );
}

export default App;

/*
technologies/concepts used:

react context
hooks
components

<a href="https://www.vecteezy.com/free-photos">Free Stock photos by Vecteezy</a>
<a href="https://www.flaticon.com/free-icons/bag" title="bag icons">Bag icons created by gungyoga04 - Flaticon</a>
*/