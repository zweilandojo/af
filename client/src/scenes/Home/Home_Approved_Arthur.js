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
    window.scrollTo(0, 0)

    // Get the snackbar DIV
    var x = document.getElementById("snackbar");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
  render() {
    return (
      <div className="app">
        <AppHeader />
        <AgentHomeBanner firstName="Matt" temperature="74" />

        <main className="container mx-auto px-2 max-w-lg">

          <div className="referral-tracking clearfix mb-12">

            {/* <button onClick={this.myFunction}>Toaster</button> */}

            <h3 className="mb-4 ml-6 text-2xl">
              Referrals
            </h3>
            <div className="border border-grey-light p-8 rounded-lg">
              <div className="clearfix">
                <p className="text-grey-dark float-left text-base mb-6">
                  Please review by Wed, Dec 27
                </p>
              </div>

            {/* REFERRAL TRACKING LIST */}
            <div>
              <Link to="/referral-approved-arthur-profile" className="py-4 border-b border-grey-light flex">
                <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-green-light text-white">
                  <div className="avatar-initials">S</div>
                </div>
                <div className="flex-initial ml-4">
                  <span className="text-lg block mb-1">
                    Sofia Perez
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
                    <span className="text-red text-sm mr-1"></span>
                    <img src={iconChevronRightgrey} className="svg-grey" alt="" />
                  </div>
                </div>
              </Link>

              <Link to="/referral-barebones-needsReview-review" className="py-4 border-b border-grey-light flex referral-list_needs-review">
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

              <Link to="/referral-dead-review" className="pt-4 flex referral-list_dead">
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
                    <span className="ml-1 inline text-grey-dark text-xs">Dead</span>
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

          <Milestones talk="3" set="1" met="1" offer="0" accept="0" transact="0" />

          <footer className="mb-12 flex">
            <Link to="/support" className="w-full text-center mr-4 inline-block py-6 px-4 rounded-full text-lg">
              Support
            </Link>{/*
            <Link to="/" className="w-1/2 md:w-1/2 text-center inline-block py-6 px-4 border border-grey-light rounded-full text-lg">
              Send Feedback
            </Link>*/}
          </footer>
        </main>

        <div id="snackbar" className="shadow">
          <span className="inline-block mr-2" aria-label="thumbsup" role="img">👍</span>
          Sofia has been updated
        </div>
      </div>
    )
  }
}
export default HomeNeedsReview;
