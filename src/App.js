import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ItemPage from './pages/ItemPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import FavoritedItemsPage from './pages/FavoritedItemsPage';
import { FavoriteProvider } from './contexts/FavoriteContext';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import MainLayout from './layouts/MainLayout';
import { ItemsProvider } from './contexts/ItemsContext'
import HoodiesPage from './pages/HoodiesPage';
import SweatersPage from './pages/SweatersPage';

function App() {
  return (
    <ItemsProvider>
      <ShoppingCartProvider>
        <FavoriteProvider>
          <Router>
            <MainLayout>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/item/:id" element={<ItemPage />} />
                <Route path="shopping-cart" element={<ShoppingCartPage />} />
                <Route path="favorites" element={<FavoritedItemsPage />} />
                <Route path="hoodies" element={<HoodiesPage />} />
                <Route path="sweaters" element={<SweatersPage />} />
              </Routes>
            </MainLayout>
          </Router>
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