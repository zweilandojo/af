import React from 'react';
import { Link } from 'react-router-dom';

// Components
import AppHeader from '../../components/AppHeader/index.js';

// Assets
import iconPerson from '../../assets/images/icon-person.svg';
import iconCheckboxChecked from '../../assets/images/icon-checkmark-checked.svg';
import iconCheckboxgrey from '../../assets/images/icon-checkmark-checked-gray.svg';
import iconChevronRightgrey from '../../assets/images/icon-chevron-right-gray.svg';
import logoBlueCircle from '../../assets/images/logo-ojo-bg-blue.png';

class Profile extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="app">
        <header className="w-full bg-white">
          <div className="absolute pin-l">
            <Link to="/" className="inline-block flex-no-shrink px-6 py-4">
              <img src={logoBlueCircle} className="w-8 h-8" alt="OJO Logo" />
            </Link>
          </div>

          <div className="absolute pin-r px-6 py-4">
            <Link to="/" className="inline-block text-grey font-semibold p-3">Home</Link>
            <Link to="/profile" className="inline-block text-black font-semibold p-3">Sandra</Link>
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

        <main className="container mx-auto px-5 max-w-lg md:pt-6">
          <div className="referral-tracking my-10 mb-16">
            <header className="mb-6">
              <h3 className="mb-2 font-bold text-4xl">
                Sandra Shaw
              </h3>
              <p className="mb-1">3 referrals · 3 closings</p>
              <p className="mb-1">
                <a href="sandrashaw.com">sandrashaw.com</a>
              </p>
              <p className="text-grey-dark text-sm">Austin, TX</p>
            </header>
          </div>

          <footer className="mb-12">
            <Link to="/support"
              className="text-grey-darkest leading-loose text-sm font-medium px-4 py-3 shadow rounded hover:bg-grey-lightest"
            >
              Need help?
            </Link>
          </footer>
        </main>

      </div>
    )
  }
}
export default Profile;
