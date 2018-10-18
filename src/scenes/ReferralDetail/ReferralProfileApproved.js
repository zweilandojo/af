import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import iconChatWhite from '../../assets/images/icon-chat-w.png';
import iconPhoneWhite from '../../assets/images/icon-phone-w.png';
import iconEmailWhite from '../../assets/images/icon-email-w.png';
import iconChevronLeftWhite from '../../assets/images/icon-chevron-left-w.png';

// Components
import HomeListItem from '../../components/HomeListItem/index.js';

const ReferralProfile = () => (
  <div className="app">
    <div className="review-status-wrapper">
      <header className="h-16 flex">
        <div className="w-1/3 app-header-back-button">
          <Link to="/" className="block">
            <img src={iconChevronLeftWhite} className="icon icon-chevron-left mr-1 float-left" alt="chevron left" />
          </Link>
        </div>
        {/*
        <div className="w-1/3 text-center align-middle">
          <div className="">
          </div>
        </div>
        */}
      </header>

      <div className="app-banner text-center mb-6">
        <div className="avatar avatar-lg flex items-center">
          <span className="block w-full text-center mt-2">G</span>
        </div>
        <h2 className="mb-2 text-white">
          Gunny Celis
        </h2>
        <h4 className="font-normal text-white text-grey-dark text-sm">
          Buyer <span className="opacity-50 mx-1">&#8226;</span> Referred: Aug 29, 2018
        </h4>
        <div className="flex justify-center">
          <a href="sms:15125551234" className="py-6 px-4 block text-center">
            <div className="btn-contact-icon flex items-center">
              <div className="block w-full flex items-center justify-center">
                <img src={iconChatWhite} className="w-5" alt="sms message" />
              </div>
            </div>
            <small className="block text-white">
              sms
            </small>
          </a>
          <a href="tel:15125551234" className="py-6 px-4 block text-center">
            <div className="btn-contact-icon flex items-center">
              <div className="block w-full flex items-center justify-center">
                <img src={iconPhoneWhite} className="h-5" alt="" />
              </div>
            </div>
            <small className="block text-white">
              call
            </small>
          </a>
          <a href="mailto:email@address.com" className="py-6 px-4 block text-center">
            <div className="btn-contact-icon flex items-center">
              <div className="block w-full flex items-center justify-center">
                <img src={iconEmailWhite} className="w-5" alt="" />
              </div>
            </div>
            <small className="block text-white">
              email
            </small>
          </a>
        </div>
      </div>

      <nav className="nav nav-tabs card-top">
        <div className="max-w-lg mx-auto">
          <div className="tab active">
            <Link to="/referral-profile-approved">
              Profile
            </Link>
          </div>
          <div className="tab">
            <Link to="/referral-review-approved">
              Review
            </Link>
          </div>
        </div>
      </nav>

  </div>

    <main className="container mx-auto px-2 pb-24 max-w-lg">
      <section className="pb-6 mb-6 mt-8">
          <header className="mb-6">
            <h3 className="mb-4 ml-6 text-2xl">
              About
            </h3>
          </header>
          <div className="border border-grey-light p-8 rounded-lg">
            <ul className="text-base leading-normal list-reset">
              <li className="border-b border-grey-light flex pb-2">
                <div className="w-1/2 text-grey-dark">
                  Location
                </div>
                <div className="w-1/2">
                  Austin, TX
                </div>
              </li>
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Budget
                </div>
                <div className="w-1/2">
                  $350 - $750k
                </div>
              </li>
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Property Type
                </div>
                <div className="w-1/2">
                  Homes, Townhomes, Condo
                </div>
              </li>
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Bed
                </div>
                <div className="w-1/2">
                  2+
                </div>
              </li>
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Bath
                </div>
                <div className="w-1/2">
                  1.5+
                </div>
              </li>
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Financing
                </div>
                <div className="w-1/2">
                  Needs lender
                </div>
              </li>
              <li className="flex pt-3">
                <div className="w-1/2 text-grey-dark">
                  Timeline
                </div>
                <div className="w-1/2">
                  Less than 3 months
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <header className="mb-4">
            <h3 className="mb-4 ml-6 text-2xl">
              Handoff notes
            </h3>
          </header>
          <div className="border border-grey-light p-8 rounded-lg">
            <p className="text-grey-dark text-base mb-8">
              Last updated Oct 16, 2018 6:45 PM
            </p>
            <p className="text-black text-base leading-normal">
              Gunny would like to speak about a home purchase.<br/>
              Best time to contact: Evening (6-9 pm)<br/>
              Area: Hyde Park, East Side<br/>
              First Time Buyer: Y<br/>
              Property Inquired:<br/>
              200 Bullock Dr.<br/>
              Austin, TX 78774
            </p>
          </div>
        </section>

        <section className="pb-6 mb-6">
          <header className="mb-4">
            <h3 className="mb-4 ml-6 text-2xl">
              Gunny’s favorites
            </h3>
          </header>
          <div className="border border-grey-light p-8 rounded-lg">
            <p className="text-grey-dark text-base mb-8">
              A few homes Gunny really likes
            </p>
            <div className="home-list flex flex-wrap -mx-2">
              <HomeListItem />
              <HomeListItem />
              <HomeListItem />
              <HomeListItem />
              <HomeListItem />
            </div>
          </div>
        </section>
    </main>
  </div>
)

export default ReferralProfile;
