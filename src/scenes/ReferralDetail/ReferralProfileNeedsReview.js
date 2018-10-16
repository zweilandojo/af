import React from 'react';
import { Link } from 'react-router-dom';

import iconChatWhite from '../../assets/images/icon-chat-w.png';
import iconPhoneWhite from '../../assets/images/icon-phone-w.png';
import iconEmailWhite from '../../assets/images/icon-email-w.png';
import iconChevronLeftWhite from '../../assets/images/icon-chevron-left-w.png';

const ReferralProfile = () => (
  <div className="app">
    <div className="review-status-wrapper review-status_needs-review">
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
          <span className="block w-full text-center mt-2">A</span>
        </div>
        <h2 className="mb-2 text-white">
          Arthur Belling
        </h2>
        <h4 className="font-normal text-white text-grey-dark text-sm">
          Referred: Nov 1, 2018
        </h4>
        <div className="flex justify-center">
          <a href="sms:15125551234" className="py-6 px-4 block text-center">
            <div className="btn-contact-icon flex items-center">
              <div className="block w-full flex items-center justify-center">
                <img src={iconChatWhite} className="w-5" alt="sms message" />
              </div>
            </div>
            <small className="block text-white">
              message
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

          {/* Begin Missing Email State */}
          <div className="py-6 px-4 block text-center opacity-50">
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
            <Link to="/referral-profile-needs-review">
              Profile
            </Link>
          </div>
          <div className="tab">
            <Link to="/referral-review-needs-review">
              Review
            </Link>
          </div>
        </div>
      </nav>

  </div>

    <main className="container mx-auto px-2 pb-24 max-w-lg">
      <section className="pb-6 mb-6 mt-8">
          <header className="mb-4">
            <h3 className="ml-6 text-2xl">
              About
            </h3>
          </header>
          <div className="border border-grey-light p-8 rounded-lg">
            <ul className="text-base leading-normal list-reset">
              <li className="border-b border-grey-light flex pb-2">
                <div className="w-1/2 text-grey-dark">
                  Client Type
                </div>
                <div className="w-1/2">
                  Buyer
                </div>
              </li>
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Budget
                </div>
                <div className="w-1/2">
                  $250 - $450k
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
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Home Type
                </div>
                <div className="w-1/2">
                  Single Family Home
                </div>
              </li>
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Bed / Bath
                </div>
                <div className="w-1/2">
                  2 Bed / 1.5 Bath
                </div>
              </li>
              <li className="flex pt-3">
                <div className="w-1/2 text-grey-dark">
                  Financing
                </div>
                <div className="w-1/2">
                  Has financing
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="pb-6 mb-6">
          <header className="mb-4">
            <h3 className="mb-4 ml-6 text-2xl">
              Call notes
            </h3>
          </header>
          <div className="border border-grey-light p-8 rounded-lg">
            <p className="text-grey-dark text-base mb-8">
              Last updated Aug 10, 2018 2:15 PM
            </p>
            <p className="text-black text-base leading-normal">
              Arthur would like to speak about a home purchase.<br/>
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
              Arthur’s favorites
            </h3>
          </header>
          <div className="border border-grey-light p-8 rounded-lg">
            <p className="text-grey-dark text-base mb-8">
              A few homes Arthur really likes
            </p>
          </div>
        </section>
    </main>
  </div>
)

export default ReferralProfile;
