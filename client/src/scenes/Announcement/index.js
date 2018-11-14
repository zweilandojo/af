import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import iconClose from '../../assets/images/icon-close.png';

// Components

class Announcement extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="h-16 flex">
          <div className="w-1/3">
            <Link to="/" className="block">
              <img src={iconClose} className="icon w-8 ml-4 mt-3" alt="close left" />
            </Link>
          </div>
        </header>

        <div className="text-center pt-16 mb-8">
          <h2 className="mb-2 text-3xl font-medium">What’s new?</h2>
          <p className="text-grey-dark text-base flex items-start justify-center">
            <span className="inline-block px-8 leading-normal">We’ve spruced up the place since you were last here. Take a look.</span>
          </p>
        </div>

        <main className="container mx-auto px-2 max-w-lg">
          <div className="border border-grey-light p-8 rounded-lg">

            <div className="py-4 flex">
              <div className="w-16 h-16 bg-grey-light flex-no-shrink rounded-full flex items-center justify-center">

              </div>
              <div className="flex-1 ml-4">
                <span className="text-lg leading-normal block mb-3">Referral Profiles, now in OJO</span>
                <span className="text-base leading-normal text-grey-dark">View your OJO referral’s contact info, their buying preferences, and favorite homes.</span>
              </div>
            </div>

          </div>
        </main>

        <section className="fixed pin-b actions">
          <div className="container flex items-center px-6 mx-auto max-w-lg">
            <div className="flex-1">
              <Link to="/" className="btn btn-blue block text-center text-lg">
                Onward
              </Link>
            </div>
          </div>
        </section>

      </div>
    )
  }
}
export default Announcement;
