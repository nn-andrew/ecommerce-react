import React from 'react';
import Navbar from '../components/Navbar';

const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      <main>
        { children }
      </main>
      <div className="p-5"></div>
      <div className="p-5"></div>
      <div className="p-5 text-custom-light">
        <h5>Shop by nn-andrew</h5>
        <h5>Resources from hunidesign.com, Vecteezy, and Flaticon</h5>
      </div>
    </div>
  )
}

export default MainLayout;