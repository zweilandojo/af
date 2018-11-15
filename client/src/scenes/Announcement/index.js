import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import iconClose from '../../assets/images/icon-close.png';
import illustrationProfile from '../../assets/images/illustrations/announcement-profiles.png';
//import illustrationProfile from '../../assets/images/illustrations/announcement-profiles.png';

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

        <div className="text-center my-8">
          <h2 className="mb-2 text-3xl font-medium">What’s new?</h2>
          <p className="text-grey-dark text-base flex items-start justify-center">
            <span className="inline-block px-8 leading-normal max-w-sm">
              We’ve spruced up the place since you were last here. Take a look.
            </span>
          </p>
        </div>

        <main className="container mx-auto px-2 max-w-lg">
          <div className="border border-grey-light p-8 rounded-lg">

            <div className="py-2 text-center">
              <div className="mx-auto w-16 h-16 mb-8 flex-no-shrink rounded-full flex items-center justify-center">
                <img src={illustrationProfile} className="w-12" alt="illustration" />
              </div>
              <div className="max-w-sm mx-auto">
                <span className="text-lg leading-normal block mb-2">Referral Profiles, now in OJO</span>
                <span className="text-base leading-normal text-grey-dark">View your OJO referral’s contact info, their buying preferences, and favorite homes.</span>
              </div>
            </div>

          </div>
        </main>

        <section className="max-w-md mx-auto mt-10">
          <div className="container flex items-center px-6 mx-auto max-w-lg">
            <div className="flex-1">
              <Link to="/" className="btn btn-blue block text-center text-lg">
                Continue
              </Link>
            </div>
          </div>
        </section>

      </div>
    )
  }
}
export default Announcement;
