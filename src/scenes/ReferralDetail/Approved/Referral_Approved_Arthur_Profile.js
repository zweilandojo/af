import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import iconChatWhite from '../../../assets/images/icon-chat-w.png';
import iconPhoneWhite from '../../../assets/images/icon-phone-w.png';
import iconEmailWhite from '../../../assets/images/icon-email-w.png';
import iconChevronLeftWhite from '../../../assets/images/icon-chevron-left-w.png';

// Components
import HomeListItem from '../../../components/HomeListItem/index.js';

const ReferralProfile = () => (
  <div className="app">
    <div className="review-status-wrapper review-status_approved">
      <header className="h-16 flex">
        <div className="w-1/3 app-header-back-button">
          <Link to="/home-approved-arthur" className="block">
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
          Buyer <span className="opacity-50 mx-1">&#8226;</span> Referred: Nov 1, 2018
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
            <Link to="/referral-approved-arthur-profile">
              Profile
            </Link>
          </div>
          <div className="tab">
            <Link to="/referral-approved-arthur-review">
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
                  Phone
                </div>
                <div className="w-1/2">
                  (555) 512-1234
                </div>
              </li>
              <li className="border-b border-grey-light flex pt-3 pb-2">
                <div className="w-1/2 text-grey-dark">
                  Location
                </div>
                <div className="w-1/2">
                  Cedar Park, TX
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

        <section className="pb-6 mb-6">
          <header className="mb-4">
            <h3 className="mb-4 ml-6 text-2xl">
              Handoff notes
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
            <div className="home-list flex flex-wrap -mx-2">
              <HomeListItem
                imgUrl="https://s3st2.openlistings.com/images/properties/v2/5bceee7d71a60943848ec8e2/1280/794/5bceefd080d4b12ee930b036.jpg"
                address="1310 E M Franklin Ave #4"
                price="430,000"
                neighborhood="MLK"
                cityStateZip="Austin, TX 78721"
                bed="4"
                bath="3"
                sqft="1,399"
              />
              <HomeListItem
                imgUrl="https://s3st2.openlistings.com/images/properties/v2/5bd4bd8c80d4b12f44c93961/1280/794/5bd4bdc880d4b12f44c93cb6.jpg"
                address="908 E 15th St"
                price="378,000"
                neighborhood="Central East Austin"
                cityStateZip="Austin, TX 78702"
                bed="3"
                bath="3"
                sqft="2,314"
              />
              <HomeListItem
                imgUrl="https://s3st3.openlistings.com/images/properties/v2/5bd82b4971a60975ec56c2be/1280/794/5bd82bfe71a60975ec56c5ff.jpg"
                address="3100 White Rock Dr"
                price="456,000"
                neighborhood="Allandale"
                cityStateZip="Austin, TX 78757"
                bed="3"
                bath="2"
                sqft="1,550"
              />
            </div>
          </div>
        </section>
    </main>
  </div>
)

export default ReferralProfile;
