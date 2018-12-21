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

          <div className="absolute pin-r px-2 py-4">
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
            <header className="mb-12">
              <h3 className="mb-2 font-bold text-4xl">
                Sandra Shaw
              </h3>
              <p className="mb-1">3 referrals · 3 closed</p>
              <p className="mb-1">
                <a href="sandrashaw.com">sandrashaw.com</a>
              </p>
              <p className="text-grey-dark text-sm">Austin, TX</p>
            </header>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/4 mb-10 leading-loose text-sm font-medium">
                <div className="mb-2">
                  <a href="#account" className="text-black">Account</a>
                </div>
                <div className="mb-2">
                  <a href="#brokerage" className="text-black">Brokerage</a>
                </div>
                <div className="mb-2">
                  <a href="#areas" className="text-black">Market &amp; Areas</a>
                </div>
              </div>
              <div className="w-full sm:w-3/4">
                <section className="mb-16" id="account">
                  <h3 className="text-2xl mb-6">Account</h3>
                  <ul className="border-t border-grey-light text-sm leading-normal list-reset">
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Phone Number
                      </div>
                      <div className="w-1/2 text-right">
                        <span className="text-black">+1 (555) 512-1234</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Email Address
                      </div>
                      <div className="w-1/2 text-right">
                        <span className="text-black">sandra.shaw@coldwellbanker.com</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Agent Type
                      </div>
                      <div className="w-1/2 text-right">
                        <span className="text-black">Listing</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Agent Matching
                      </div>
                      <div className="w-1/2 text-right">
                        <span className="text-black">Yes</span>
                      </div>
                    </li>
                  </ul>
                </section>

                <section className="mb-16" id="brokerage">
                  <h3 className="text-2xl mb-6">Brokerage</h3>
                  <ul className="border-t border-grey-light text-sm leading-normal list-reset">
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Brokerage Name
                      </div>
                      <div className="w-1/2 text-right">
                        <span className="text-black">Coldwell Banker United, Realtors</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Office
                      </div>
                      <div className="w-1/2 text-right">
                        <span className="text-black">Downtown</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Brokerage Address
                      </div>
                      <div className="w-1/2 text-right">
                        <span className="text-black">1617 W 6th St c, Austin, TX 78703</span>
                      </div>
                    </li>

                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/3 text-grey-dark">
                        Brokerage Phone
                      </div>
                      <div className="w-2/3 text-right">
                        <span className="text-black">(512) 876-0480</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Website
                      </div>
                      <div className="w-1/2 text-right truncate">
                        <span className="text-black">{'https://www.coldwellbankerhomes.com/austin-houston'}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        State
                      </div>
                      <div className="w-1/2 text-right">
                        <span className="text-black">Texas</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Timezone
                      </div>
                      <div className="w-1/2 text-right">
                        <span className="text-black">America/Chicago</span>
                      </div>
                    </li>
                  </ul>
                </section>

                <section className="mb-16" id="areas">
                  <h3 className="text-2xl mb-6">Market &amp; Areas</h3>
                  <ul className="border-t border-grey-light text-sm leading-normal list-reset">
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Metro / Market
                      </div>
                      <div className="w-1/2 text-right">
                        <span className="text-black">Austin, TX</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Areas
                      </div>
                      <div className="w-1/2 text-right">
                        <span className="text-black">Central Austin, East Central Austin, Downtown Austin, Northwest Austin, South Austin, Southwest Austin, Hyde Park, West Austin, Tarrytown, Cedar Park</span>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
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
