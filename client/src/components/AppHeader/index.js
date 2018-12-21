import React from 'react';
import { Link } from 'react-router-dom';

import logoBlueCircle from '../../assets/images/logo-ojo-bg-blue.png';
//import logoBlack from '../../assets/images/logo-ojo-black.png';

const AppHeader = () => (
  <header className="w-full bg-white">
    <div className="absolute pin-l">
      <Link to="/" className="inline-block flex-no-shrink px-6 py-4">
        <img src={logoBlueCircle} className="w-8 h-8" alt="OJO Logo" />
      </Link>
    </div>

    <div className="absolute pin-r px-2 py-4">
      <Link to="/" className="inline-block text-black font-semibold p-3">Home</Link>
      <Link to="/profile" className="inline-block text-grey font-semibold p-3">Sandra</Link>
    </div>

    <div className="container mx-auto max-w-lg invisible lg:visible">
      <div className="search py-3 px-4">
        <input
          className="app-search-input"
          type="search"
          placeholder="Search"
        />
      </div>
    </div>
  </header>
)

export default AppHeader;
