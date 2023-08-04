import React, { useContext } from "react";
import { FavoriteContext } from './FavoriteContext';
import { ShoppingCartContext} from './ShoppingCartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { favoritedItems } = useContext(FavoriteContext);
  const favoritedItemsCount = favoritedItems.length;
  const { shoppingCartItems } = useContext(ShoppingCartContext);
  const shoppingCartItemsCount = shoppingCartItems.length;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src="../assets/OSAKA.png" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hoodies
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/" className="dropdown-item">View all</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sweaters
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link to="/" className="dropdown-item">View all</Link></li>
              </ul>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <form className="d-flex">
            <Link to="/favorites">
              <button className="btn btn-secondary rounded-3 m-2" type="submit">♥ {favoritedItemsCount}</button>
            </Link>
          </form>
          <form className="d-flex">
            <Link to="/shopping-cart">
              <button className="btn btn-secondary rounded-3 m-2 shopping-cart" type="submit"><img src="../assets/shopping_cart.png" /> {shoppingCartItemsCount}</button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;