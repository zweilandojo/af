import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import iconChatWhite from '../../../assets/images/icon-chat-w.png';
import iconPhoneWhite from '../../../assets/images/icon-phone-w.png';
import iconEmailWhite from '../../../assets/images/icon-email-w.png';
import logoBlueCircle from '../../../assets/images/logo-ojo-bg-blue.png';

// Components
import HomeListItem from '../../../components/HomeListItem/index.js';
import AppHeaderReferral from '../../../components/AppHeaderReferral/index.js';

class ReferralProfile extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="app">
        <div className="review-status-wrapper review-status_needs-review">
          {/* Begin: Fixed App Header for Referrals */}
          <AppHeaderReferral userFullName="Sofia Perez" />
          {/* End: Fixed App Header for Referrals */}

          <div className="app-banner text-center mb-6 pt-16">
            <div className="avatar avatar-lg flex items-center">
              <span className="block w-full text-center mt-2">S</span>
            </div>
            <h2 className="mb-2 text-white">
              Sofia Perez
            </h2>
            <h4 className="font-normal text-white text-grey-dark text-sm">
              Buyer <span className="opacity-50 mx-1">&#8226;</span> Referred: Nov 1, 2018
            </h4>
            <div className="flex justify-center">
              <a href="sms:15125551234" className="py-6 w-1/5 md:w-16 md:mx-1 block text-center">
                <div className="btn-contact-icon flex items-center">
                  <div className="block w-full flex items-center justify-center">
                    <img src={iconChatWhite} className="w-5" alt="sms message" />
                  </div>
                </div>
                <small className="block text-white">
                  message
                </small>
              </a>
              <a href="tel:15125551234" className="py-6 w-1/5 md:w-16 md:mx-1 block text-center">
                <div className="btn-contact-icon flex items-center">
                  <div className="block w-full flex items-center justify-center">
                    <img src={iconPhoneWhite} className="h-5" alt="" />
                  </div>
                </div>
                <small className="block text-white">
                  call
                </small>
              </a>

              {/* Begin Missing Email State */}
              <div className="py-6 w-1/5 md:w-16 md:mx-1 text-center opacity-50">
                <div className="btn-contact-icon flex items-center">
                  <div className="block w-full flex items-center justify-center">
                    <img src={iconEmailWhite} className="w-5" alt="" />
                  </div>
                </div>
                <small className="block text-white">
                  email
                </small>
              </div>
              {/* End Missing Email State */}

            </div>
          </div>

          <nav className="nav nav-tabs card-top">
            <div className="max-w-lg mx-auto">
              <div className="tab active">
                <Link to="/referral-needsReview-profile">
                  Profile
                </Link>
              </div>
              <div className="tab">
                <Link to="/referral-needsReview-review">
                  Review
                </Link>
              </div>
            </div>
          </nav>

      </div>

        <main className="container mx-auto px-5 max-w-lg">
          <section className="mb-10 mt-10">
              <header className="mb-3">
                <h3 className="text-2xl">
                  About
                </h3>
              </header>
              <div className="border-t border-grey-light py-5">
                <ul className="text-base leading-normal list-reset">
                  <li className="border-b border-grey-light flex pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Phone
                    </div>
                    <div className="w-1/2">
                      <a href="tel:15555121234">+1 (555) 512-1234</a>
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Email
                    </div>
                    <div className="w-1/2">
                      <span className="text-grey">Unknown</span>
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Current Location
                    </div>
                    <div className="w-1/2">
                      Cedar Park, TX
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Desired Location
                    </div>
                    <div className="w-1/2">
                      Hyde Park, Central East Austin, Southeast Austin
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Budget
                    </div>
                    <div className="w-1/2">
                      $300 - $500k
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Property Type
                    </div>
                    <div className="w-1/2">
                      Homes, Townhomes
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Bed
                    </div>
                    <div className="w-1/2">
                      3+
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Bath
                    </div>
                    <div className="w-1/2">
                      2+
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Financing
                    </div>
                    <div className="w-1/2">
                      Has a lender
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Timeline
                    </div>
                    <div className="w-1/2">
                      Less than 6 months
                    </div>
                  </li>
                  <li className="flex pt-3">
                    <div className="w-1/2 text-grey-dark">
                      Lead Source
                    </div>
                    <div className="w-1/2">
                      Facebook
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-6">
              <header className="mb-4">
                <h3 className="text-2xl">
                  Handoff notes
                </h3>
              </header>
              <div className="border-t border-grey-light py-6">
                <div className="activity-list">
                  <div className="mb-6 activity-list_list-item flex">
                    <div className="mr-4">
                      <div className="avatar avatar-sm">
                        <img src={logoBlueCircle} className="w-8 no-stretch" alt="OJO Logo" />
                      </div>
                    </div>
                    <div className="">
                      <p className="mb-1 leading-normal">
                        <strong className="text-black text-lg font-medium">OJO</strong>
                        <span className="text-sm text-grey-dark ml-2">Dec 1, 2018 at 2:15 PM</span>
                      </p>
                      <p className="text-black text-base leading-normal">
                        Sofia would like to speak about a home purchase.<br />
                        Best time to contact: Evening (6-9 pm)<br />
                        Area: Hyde Park, Central East Side, Southeast Austin<br />
                        First Time Buyer: Y<br />
                        Property Inquired:<br />
                        1158 Ridgeway Dr #A<br />
                        Austin, TX 78702
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pb-6 mb-6">
              <header className="mb-4">
                <h3 className="text-2xl">
                  Sofia’s favorites
                </h3>
              </header>
              <div className="border-t border-grey-light py-8">
                <div className="home-list flex flex-wrap -mx-2">
                <HomeListItem
                  homeUrl="https://consumer.agent.ojo.me/listings/fa6010b1f2e6d48ed1e8fc323e00c60f"
                  imgUrl="http://tx-actris.photos.mlsfinder.com/photos/1/1/9/7/8/5/8/1197858-1.jpg"
                  address="10316 Yellowstone Dr"
                  price="329,900"
                  neighborhood="Southeast Austin"
                  cityStateZip="Austin, TX 78747"
                  bed="3"
                  bath="2"
                  sqft="1609"
                  mlsID="1197858"
                />
                <HomeListItem
                  homeUrl="https://consumer.agent.ojo.me/listings/78e68f4fbdbf5a3efec39d98013e0f7d"
                  imgUrl="http://tx-actris.photos.mlsfinder.com/photos/4/3/2/8/8/3/2/_/3/4328832_3-1.jpg"
                  address="2403 E 14th St #2"
                  price="479,900"
                  neighborhood="Central East Austin"
                  cityStateZip="Austin, TX 78702"
                  bed="3"
                  bath="2"
                  sqft="1100"
                  mlsID="4328832"
                />
                <HomeListItem
                  homeUrl="https://consumer.agent.ojo.me/listings/52a7bb17e365c3e95cfeb70521721400"
                  imgUrl="http://tx-actris.photos.mlsfinder.com/photos/9/1/7/1/8/3/9/9171839-1.jpg"
                  address="1600 Haskell St"
                  price="685,000"
                  neighborhood="Central East Austin"
                  cityStateZip="Austin, TX 78702"
                  bed="4"
                  bath="2.5"
                  sqft="1,971"
                  mlsID="9171839"
                />
                </div>
              </div>
            </section>
        </main>
        <footer className="mb-12 flex">
          <Link to="/support" className="w-full text-center mr-4 inline-block py-6 px-4 rounded-full text-lg">
            Support
          </Link>{/*
          <Link to="/" className="w-1/2 md:w-1/2 text-center inline-block py-6 px-4 border border-grey-light rounded-full text-lg">
            Send Feedback
          </Link>*/}
        </footer>
      </div>
    )
  }
};

export default ReferralProfile;
