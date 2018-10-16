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
          <div className="tab">
            <Link to="/referral-profile-needs-review">
              Profile
            </Link>
          </div>
          <div className="tab active">
            <Link to="/referral-review-needs-review">
              Review
            </Link>
          </div>
        </div>
      </nav>

    </div>

    <main className="container mx-auto px-2 pb-24 max-w-lg">
      <section className="pb-6 mb-6 border-b border-grey-lightest mt-8">
          <header className="mb-6">
            <h3 className="mb-4 ml-6 text-2xl">
              Progress
              {/*
                <span className="ml-2 text-sm text-grey float-right">(0% complete)</span>
              */}
            </h3>
          </header>
          <div className="border border-grey-light p-8 rounded-lg">
            <p className="text-grey-dark text-base mb-8">Which steps have you completed?</p>

            <ul className="list-reset text-center block">

              {/* BEGIN ACTIVE PROGRESS CHECKBOX */}
              <li className="btn-stroked active mr-1 mb-3">
                <label className="">
                  <input type="checkbox" value="Talk" className="checkbox float-left _8X2Bp _3TFgA" />
                  Talk
                </label>
              </li>
              {/* END ACTIVE PROGRESS CHECKBOX */}

              <li className="btn-stroked active mr-1 mb-3">
                <label className="">
                  <input type="checkbox" value="Set" className="checkbox float-left _8X2Bp _3TFgA" />
                  Set
                </label>
              </li>
              <li className="btn-stroked active mr-1 mb-3">
                <label className="">
                  <input type="checkbox" value="Met" className="checkbox float-left _8X2Bp _3TFgA" />
                  Met
                </label>
              </li>
              <li className="btn-stroked mr-1 mb-3">
                <label className="">
                  <input type="checkbox" value="Offer" className="checkbox float-left _8X2Bp _3TFgA" />
                  Offer
                </label>
              </li>
              <li className="btn-stroked mr-1 mb-3">
                <label className="">
                  <input type="checkbox" value="Accept" className="checkbox float-left _8X2Bp _3TFgA" />
                  Accept
                </label>
              </li>
              <li className="btn-stroked mb-3">
                <label className="">
                  <input type="checkbox" value="Transact" className="checkbox float-left _8X2Bp _3TFgA" />
                  Transact
                </label>
              </li>
            </ul>
          </div>
        </section>

        <section className="pb-6 mb-6 border-b border-grey-lightest">
          <header className="mb-4">
            <h3 className="mb-4 ml-6 text-2xl">
              Likelihood of closing
            </h3>
          </header>
          <form className="border border-grey-light p-8 rounded-lg">
            <p className="text-grey-dark text-base mb-8">How likely will this referral close with you?</p>

            <div className="mb-2">
              <label className="text-base input-radio-container">Dead
                <input type="radio" className="input-radio mr-2" name="relationship" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="mb-2">
              <label className="text-base input-radio-container">Very Weak
                <input type="radio" className="input-radio mr-2" name="relationship" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="mb-2">
              <label className="text-base input-radio-container">Weak
                <input type="radio" className="input-radio mr-2" name="relationship" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="mb-2">
              <label className="text-base input-radio-container">Average
                <input type="radio" className="input-radio mr-2" name="relationship" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="mb-2">
              <label className="text-base input-radio-container">Strong
                <input type="radio" className="input-radio mr-2" name="relationship" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="mb-2">
              <label className="text-base input-radio-container">Very Strong
                <input type="radio" className="input-radio mr-2" name="relationship" />
                <span className="checkmark"></span>
              </label>
            </div>
          </form>
        </section>

        <section className="pb-6 mb-6 border-b border-grey-lightest">
          <header className="mb-4">
            <h3 className="mb-4 ml-6 text-2xl">
              Projected close month
            </h3>
          </header>
          <div className="border border-grey-light p-8 rounded-lg">
            <p className="text-grey-dark text-base mb-8">When do you think they’ll close?</p>

            <select className="input select" placeholder="Select a month...">
              <option>Dead</option>
              <option>September ’18</option>
              <option>October ’18</option>
              <option>November ’18</option>
              <option>December ’18</option>
              <option selected>January ’19</option>
              <option>February ’19</option>
              <option>March ’19</option>
              <option>April ’19</option>
              <option>May ’19</option>
              <option>June ’19</option>
              <option>July ’19</option>
              <option>August ’19</option>
              <option>September ’19</option>
              <option>October ’19</option>
              <option>November ’19</option>
              <option>December ’19</option>
              <option>n/a</option>
              <option>Other</option>
            </select>
          </div>
        </section>

        <section className="pb-6 mb-6">
          <header className="mb-4">
            <h3 className="mb-4 ml-6 text-2xl">
              Notes
            </h3>
          </header>
          <div className="border border-grey-light p-8 rounded-lg">
            <p className="text-grey-dark text-base mb-8">Anything special about this client?</p>

            <textarea className="input textarea" placeholder="What's the situation?">
            </textarea>
          </div>
        </section>

        <section className="fixed pin-b actions">
          <div className="container flex items-center px-6 mx-auto max-w-lg">
            <span className="flex-1 text-xs text-grey-dark">Everything look good?</span>
            <div className="flex-1">
              <button className="btn btn-green">Save</button>
            </div>
          </div>
        </section>
    </main>
  </div>
)

export default ReferralProfile;
