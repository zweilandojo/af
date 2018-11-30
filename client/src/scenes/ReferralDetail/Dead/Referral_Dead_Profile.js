import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import iconPerson from '../../../assets/images/icon-person.svg';
import iconChatWhite from '../../../assets/images/icon-chat-w.png';
import iconPhoneWhite from '../../../assets/images/icon-phone-w.png';
import iconEmailWhite from '../../../assets/images/icon-email-w.png';
import iconChevronLeftWhite from '../../../assets/images/icon-chevron-left-w.png';

// Components
import AppHeaderReferral from '../../../components/AppHeaderReferral/index.js';

const ReferralProfile = () => (
  <div className="app">
    <div className="review-status-wrapper review-status_dead">
      <header className="h-16 flex">
        <div className="w-1/3 app-header-back-button">
          <Link to="/" className="block">
            <img src={iconChevronLeftWhite} className="icon icon-chevron-left mr-1 float-left" alt="chevron left" />
          </Link>
        </div>
      </header>

      {/* Begin: Fixed App Header for Referrals */}
      <AppHeaderReferral userFullName="+1 (512) 897-1234" />
      {/* End: Fixed App Header for Referrals */}

      <div className="app-banner text-center mb-6">
        <div className="avatar avatar-lg flex items-center">
          <span className="block w-full text-center mt-2">
            <img src={iconPerson} className="avatar-image" alt="avatar" />
          </span>
        </div>
        <h2 className="mb-2 text-white">
          +1 (512) 897-1234
        </h2>
        <h4 className="font-normal text-white text-grey-dark text-sm">
          Buyer <span className="opacity-50 mx-1">&#8226;</span> Referred: Oct 5, 2018
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
            <Link to="/referral-dead-profile">
              Profile
            </Link>
          </div>
          <div className="tab">
            <Link to="/referral-dead-review">
              Review
            </Link>
          </div>
        </div>
      </nav>

  </div>

    <main className="container mx-auto px-2 max-w-lg">
      <section className="pb-6 mb-6 mt-10">
          <header className="mb-4">
            <h3 className="ml-6 text-2xl">
              About
            </h3>
          </header>
          <div className="border border-grey-light p-8 rounded-lg">
            <ul className="text-base leading-normal list-reset">
              <li className="border-b border-grey-light flex pb-2">
                <div className="w-1/2 text-grey-dark">
                  Phone
                </div>
                <div className="w-1/2">
                  <a href="tel:15558791234">+1 (555) 897-1234</a>
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
                  <span className="text-grey">Unknown</span>
                </div>
              </li>
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Desired Location
                </div>
                <div className="w-1/2">
                  <span className="text-grey">Unknown</span>
                </div>
              </li>
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Budget
                </div>
                <div className="w-1/2">
                  <span className="text-grey">Unknown</span>
                </div>
              </li>
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Property Type
                </div>
                <div className="w-1/2">
                  Homes
                </div>
              </li>
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Bed
                </div>
                <div className="w-1/2">
                  <span className="text-grey">Unknown</span>
                </div>
              </li>
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Bath
                </div>
                <div className="w-1/2">
                  <span className="text-grey">Unknown</span>
                </div>
              </li>
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Financing
                </div>
                <div className="w-1/2">
                  <span className="text-grey">Unknown</span>
                </div>
              </li>
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Timeline
                </div>
                <div className="w-1/2">
                  Less than a year
                </div>
              </li>
              <li className="flex pt-3">
                <div className="w-1/2 text-grey-dark">
                  Lead Source
                </div>
                <div className="w-1/2">
                  SmartZip
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="pb-6 mb-6">
          <header className="mb-4">
            <h3 className="mb-4 ml-6 text-2xl">
              OJO handoff notes
            </h3>
          </header>
          <div className="border border-grey-light p-8 rounded-lg">
            <p className="text-grey-dark text-base mb-8">
              Last updated Oct 30, 2018 5:15 PM
            </p>
            <p className="text-black text-base leading-normal">
              They would like to speak about a home purchase.<br/>
            </p>
          </div>
        </section>

        <section className="pb-6 mb-6">
          <header className="mb-4">
            <h3 className="mb-4 ml-6 text-2xl">
              Favorites
            </h3>
          </header>
          <div className="border border-grey-light p-8 rounded-lg">
            <p className="text-grey-dark text-base">
              This referral hasn’t favorited any homes yet...
            </p>
          </div>
        </section>
    </main>
  </div>
)

export default ReferralProfile;
