import React, { Children } from 'react';
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
    </div>
  )
}

export default MainLayout;