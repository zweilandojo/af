import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/ojo-logo.svg';

const AppHeader = () => (
  <header className="app-header flex content-start flex-wrap">
    <div className="w-1/3">
      {/* Nothing. Waiting for future menu. */}
    </div>
    <div className="w-1/3 text-center align-middle">
      <Link className="block" to="/">
        <img src={Logo} className="app-logo" alt="logo" />
      </Link>
    </div>
    <div className="w-1/3 text-right align-middle app-header-ctas">
      <Link className="inline-block" to="/help">
        Help
      </Link>
    </div>
  </header>
)

export default AppHeader;
