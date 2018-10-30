import React from 'react';
import { Link } from 'react-router-dom';

// Components
import AppHeader from '../../components/AppHeader/index.js';
import AgentHomeBanner from '../../components/AgentHomeBanner/index.js';
import Milestones from '../../components/Milestones/index.js';

// Assets
import iconPerson from '../../assets/images/icon-person.svg';
import iconCheckboxChecked from '../../assets/images/icon-checkmark-checked.svg';
import iconCheckboxgrey from '../../assets/images/icon-checkmark-checked-gray.svg';
import iconChevronRightgrey from '../../assets/images/icon-chevron-right-gray.svg';

class HomeNeedsReview extends React.Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <AgentHomeBanner firstName="Vishal" temperature="74" />

        <main className="container mx-auto px-2 max-w-lg">

          <div className="referral-tracking clearfix mb-12">
            <h3 className="mb-4 ml-6 text-2xl">
              Referrals
            </h3>
            <div className="border border-grey-light p-8 rounded-lg">
              <div className="clearfix">
                <p className="text-grey-dark float-left text-base mb-6">
                  Please review by Wed, Nov 7
                </p>
              </div>

            {/* REFERRAL TRACKING LIST */}
            <div>
              <Link to="/referral-review-needs-review" className="py-4 border-b border-grey-light flex referral-list_needs-review">
                <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-red-light text-white">
                  <div className="avatar-initials">A</div>
                </div>
                <div className="flex-initial ml-4">
                  <span className="text-lg block mb-1">
                    Arthur Belling
                  </span>
                  <div>
                    <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <span className="ml-1 inline text-grey-dark text-xs">Talk</span>
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <div>
                    <span className="text-red text-base mr-1">Review</span>
                  </div>
                </div>
              </Link>

              <Link to="/referral-review-needs-review" className="py-4 border-b border-grey-light flex referral-list_needs-review">
                <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-red-light text-white">
                  <img src={iconPerson} className="avatar-image" alt="avatar" />
                  <div className="avatar-initials"></div>
                </div>
                <div className="flex-initial ml-4">
                  <span className="text-lg block mb-1">
                    15125551234
                  </span>
                  <div>
                    <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <span className="ml-1 inline text-grey-dark text-xs">
                      Talk
                    </span>
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <div>
                    <span className="text-red text-base mr-1">Review</span>
                  </div>
                </div>
              </Link>

              <Link to="/referral-review-approved" className="pt-4 flex referral-list_dead">
                <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-grey-light text-white">
                  <img src={iconPerson} className="avatar-image" alt="avatar" />
                  <div className="avatar-initials"></div>
                </div>
                <div className="flex-initial ml-4">
                  <span className="text-lg block mb-1">
                    15128971234
                  </span>
                  <div>
                    <img src={iconCheckboxgrey} className="h-3 w-3 mr-px" alt="" />
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <span className="ml-1 inline text-grey-dark text-xs">Talk</span>
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <div>
                    <span className="text-red text-sm mr-1"></span>
                    <img src={iconChevronRightgrey} className="svg-grey" alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          </div>

          <Milestones talk="100" set="0" met="0" offer="0" accept="0" transact="0" />
        </main>
      </div>
    )
  }
}
export default HomeNeedsReview;
