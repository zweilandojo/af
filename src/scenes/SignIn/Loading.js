import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import logoOJOWhite from '../../assets/images/ojo-logo-white.svg';

class Loading extends React.Component {
  render() {
    return (
      <div className="app">
        <main className="flex h-screen items-stretch">
          <div className="self-center flex-1 text-center">
            <Link to="/" className="ojo-loading">
              <img src={logoOJOWhite} className="flex-1 self-center" alt="logo" />
            </Link>
          </div>
        </main>
      </div>
    )
  }
}
export default Loading;
