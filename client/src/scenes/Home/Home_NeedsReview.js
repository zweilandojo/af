import React from 'react';
import { Link } from 'react-router-dom';

// Components
import AppHeader from '../../components/AppHeader/index.js';
import AgentHomeBanner from '../../components/AgentHomeBanner/index.js';
import Milestones from '../../components/Milestones/index.js';
// import ModalManager from '../../components/ModalManager/index.js'


// Assets
import iconPerson from '../../assets/images/icon-person.svg';
import iconCheckboxChecked from '../../assets/images/icon-checkmark-checked.svg';
import iconCheckboxgrey from '../../assets/images/icon-checkmark-checked-gray.svg';
import iconChevronRightgrey from '../../assets/images/icon-chevron-right-gray.svg';

class HomeNeedsReview extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="app">
        <AppHeader />
        {/* <AgentHomeBanner firstName="Matt" temperature="74" />*/}

        <main className="container mx-auto px-5 max-w-lg md:pt-6">
          <div className="referral-tracking my-10 mb-16">
            <header className="mb-6">
              <h3 className="mb-2 font-bold text-4xl">
                Aloha, Sandra.
              </h3>
              <p className="text-grey-darkest mb-2 leading-loose text-base">
                Review your referrals by Wed, Dec 27.
              </p>
              <div className="leading-loose font-semibold uppercase text-grey-dark text-xs">
                <span className="inline-block mr-4">
                  <span className="">Met</span>
                  <span className="ml-1">0</span>
                </span>
                <span className="inline-block mr-4">
                  <span className="">Offer</span>
                  <span className="ml-1">0</span>
                </span>
                <span className="inline-block mr-4">
                  <span className="">Closed</span>
                  <span className="ml-1">0</span>
                </span>
              </div>
            </header>
            <div className="">
            {/* REFERRAL TRACKING LIST */}
            <div>
              <Link to="/referral-needsReview-review" className="pt-3 flex referral-list_needs-review">
                <div className="avatar avatar-m rounded-full flex items-center justify-center h-12 w-12 bg-red-light text-white">
                  <div className="avatar-initials text-xl mt-1">S</div>
                </div>
                <div className="flex-1 relative ml-4 border-b border-grey-lighter">
                  <span className="text-lg mt-2 block font-semibold text-black">
                    Sofia Perez
                  </span>
                  <div className="pb-3">
                    <span className="inline-block text-grey-dark tracking-normal text-sm text-green">New</span>
                  </div>
                  <span className="absolute pin-r pin-t text-red text-sm mt-2 mr-1">Review</span>
                </div>
              </Link>

              <Link to="/referral-barebones-needsReview-review" className="pt-3 flex referral-list_needs-review">
                <div className="avatar avatar-m rounded-full flex items-center justify-center h-12 w-12 bg-red-light text-white">
                  <div className="avatar-initials text-xl mt-1">A</div>
                </div>
                <div className="flex-1 relative ml-4 border-b border-grey-lighter">
                  <span className="text-lg mt-2 block font-semibold text-black">
                    Arthur Belling
                  </span>
                  <div className="pb-3">
                    <span className="inline-block text-grey-dark tracking-normal text-sm">Met</span>
                  </div>
                  <span className="absolute pin-r pin-t text-red text-sm mt-2 mr-1">Review</span>
                </div>
              </Link>

              <Link to="/referral-dead-review" className="pt-3 flex referral-list_dead">
                <div className="opacity-50 avatar avatar-m rounded-full flex items-center justify-center h-12 w-12 bg-grey text-white">
                  <img src={iconPerson} className="avatar-image" alt="avatar" />
                  <div className="avatar-initials"></div>
                </div>
                <div className="flex-1 relative ml-4 border-b border-grey-lighter">
                  <span className="opacity-50 text-lg mt-2 block font-semibold text-black">
                    15128971234
                  </span>
                  <div className="pb-3 opacity-50">
                    <span className="inline-block text-grey-dark tracking-normal text-sm">Dead</span>
                  </div>
                  <span className="absolute pin-r pin-t text-red text-sm mt-2 mr-1">
                    <img src={iconChevronRightgrey} className="svg-grey" alt="" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          </div>

          {/*<Milestones talk="3" set="0" met="0" offer="0" accept="0" transact="0" />*/}

          <footer className="mb-12">
            <Link to="/support"
              className="text-grey-darkest leading-loose text-sm font-medium px-4 py-3 shadow rounded hover:bg-grey-lightest"
            >
              Need help?
            </Link>
          </footer>
        </main>

        {/* <ModalManager /> */}


      </div>
    )
  }
}
export default HomeNeedsReview;
