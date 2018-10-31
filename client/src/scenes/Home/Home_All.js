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
  componentDidMount() {
    window.scrollTo(0, 0);
  }  
  render() {
    return (
      <div className="app">
        <AppHeader />
        <AgentHomeBanner firstName="Sandra" temperature="64" />

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
                    <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
                    <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <span className="ml-1 inline text-grey-dark text-xs">Met</span>
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
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <span className="ml-1 inline text-grey-dark text-xs"></span>
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <div>
                    <span className="text-red text-base mr-1">Review</span>
                  </div>
                </div>
              </Link>

              <Link to="/referral-review-approved" className="py-4 border-b border-grey-light flex">
                <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-green-light text-white">
                  <div className="avatar-initials">G</div>
                </div>
                <div className="flex-initial ml-4">
                  <span className="text-lg block mb-1">
                    Gunny Celis
                  </span>
                  <div>
                    <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
                    <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <span className="ml-1 inline text-grey-dark text-xs">Set</span>
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <div>
                    <span className="text-red text-sm mr-1"></span>
                    <img src={iconChevronRightgrey} className="svg-grey" alt="" />
                  </div>
                </div>
              </Link>

              <Link to="/referral-review-approved" className="py-4 border-b border-grey-light flex referral-list_reviewed">
                <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-green-light text-white">
                  <img src={iconPerson} className="avatar-image" alt="avatar" />
                  <div className="avatar-initials"></div>
                </div>
                <div className="flex-initial ml-4">
                  <span className="text-lg block mb-1">
                    15125551234
                  </span>
                  <div>
                    <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
                    <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <span className="ml-1 inline text-grey-dark text-xs">Set</span>
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <div>
                    <span className="text-red text-sm mr-1"></span>
                    <img src={iconChevronRightgrey} className="svg-grey" alt="" />
                  </div>
                </div>
              </Link>

              <Link to="/referral-review-approved" className="py-4 border-b border-grey-light flex referral-list_dead">
                <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-grey-light text-white">
                  <div className="avatar-initials">D</div>
                </div>
                <div className="flex-initial ml-4">
                  <span className="text-lg block mb-1">
                    Deadicous Jones
                  </span>
                  <div>
                    <img src={iconCheckboxgrey} className="h-3 w-3 mr-px" alt="" />
                    <img src={iconCheckboxgrey} className="h-3 w-3 mr-px" alt="" />
                    <img src={iconCheckboxgrey} className="h-3 w-3 mr-px" alt="" />
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                    <span className="ml-1 inline text-grey-dark text-xs">Met</span>
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <div>
                    <span className="text-red text-sm mr-1"></span>
                    <img src={iconChevronRightgrey} className="svg-grey" alt="" />
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

          <Milestones talk="83" set="66" met="33" offer="0" accept="0" transact="0" />
        </main>

        {/* BEGIN: REFERRAL LIST ZERO STATE */}
        <main className="container mx-auto px-2 max-w-lg">
          <div className="referral-tracking clearfix mb-12">
          <h3 className="mb-4 ml-6 text-2xl">
            Referrals
          </h3>
          <div className="border border-grey-light p-8 rounded-lg">
            <div className="clearfix">
              <p className="text-base text-grey mb-6">
                No referrals assigned
              </p>
            </div>
            <div className="py-4 border-b border-grey-light flex">
              <div className="rounded-full flex justify-center h-10 w-10 bg-grey-light">
                {/* Nothing here */}
              </div>
              <div className="flex-initial ml-4 ">
                <span className="h-3 w-24 rounded-full bg-grey-light block mt-2 mb-2">
                  {/* Nothing here */}
                </span>
                <div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white"></div>
                </div>
              </div>
            </div>
            <div className="py-4 border-b border-grey-light flex">
              <div className="rounded-full flex justify-center h-10 w-10 bg-grey-light">
                {/* Nothing here */}
              </div>
              <div className="flex-initial ml-4 ">
                <span className="h-3 w-24 rounded-full bg-grey-light block mt-2 mb-2">
                  {/* Nothing here */}
                </span>
                <div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white"></div>
                </div>
              </div>
            </div>
            <div className="py-4 flex">
              <div className="rounded-full flex justify-center h-10 w-10 bg-grey-light">
                {/* Nothing here */}
              </div>
              <div className="flex-initial ml-4">
                <span className="h-3 w-24 rounded-full bg-grey-light block mt-2 mb-2">
                  {/* Nothing here */}
                </span>
                <div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                  <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white"></div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </main>
        {/* END: REFERRAL LIST ZERO STATE */}
      </div>
    )
  }
}
export default HomeNeedsReview;
