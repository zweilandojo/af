import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import iconChatWhite from '../../../assets/images/icon-chat-w.png';
import iconPhoneWhite from '../../../assets/images/icon-phone-w.png';
import iconEmailWhite from '../../../assets/images/icon-email-w.png';

// Components
import AppHeaderReferral from '../../../components/AppHeaderReferral/index.js';

const ReferralReviewApproved = () => (
  <div className="app">
    <div className="review-status-wrapper">
      {/* Begin: Fixed App Header for Referrals */}
      <AppHeaderReferral userFullName="Sofia Perez" />
      {/* End: Fixed App Header for Referrals */}

      <div className="app-banner text-center mb-6 pt-16">
        <div className="avatar avatar-lg bg-blue-lightest flex items-center">
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
          <div className="tab">
            <Link to="/referral-profile-approved">
              Profile
            </Link>
          </div>
          <div className="tab active">
            <Link to="/referral-review-approved">
              Review
            </Link>
          </div>
        </div>
      </nav>

  </div>

  <main className="container mx-auto px-2 pb-24 max-w-lg">
    <section className="pb-6 mb-6 mt-10">
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
            <li className="btn-stroked mr-1 mb-3">
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
                <input type="checkbox" value="Closed" className="checkbox float-left _8X2Bp _3TFgA" />
                Closed
              </label>
            </li>
          </ul>
        </div>
      </section>

      <section className="pb-6 mb-6">
        <header className="mb-4">
          <h3 className="mb-4 ml-6 text-2xl">
            Likelihood of closing
          </h3>
        </header>
        <form className="border border-grey-light p-8 rounded-lg">
          <p className="text-grey-dark text-base mb-8">How likely will this referral close with you?</p>

          <div className="mb-2">
            <label className="text-base input-radio-container">Likely
              <input type="radio" className="input-radio mr-2" name="relationship" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="mb-2">
            <label className="text-base input-radio-container">50/50
              <input type="radio" className="input-radio mr-2" name="relationship" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="mb-2">
            <label className="text-base input-radio-container">Not Likely
              <input type="radio" className="input-radio mr-2" name="relationship" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="mb-2">
            <label className="text-base input-radio-container">Dead
              <input type="radio" checked className="input-radio mr-2" name="relationship" />
              <span className="checkmark"></span>
            </label>
          </div>
        </form>
      </section>

      <section className="pb-6 mb-6">
        <header className="mb-4">
          <h3 className="mb-4 ml-6 text-2xl">
            Projected close month
          </h3>
        </header>
        <div className="border border-grey-light p-8 rounded-lg">
          <p className="text-grey-dark text-base mb-8">When do you think they’ll close?</p>

          <select className="input select" placeholder="Select a month...">
            <option defaultValue>Select a month...</option>
            <option>I don’t know</option>
            <option>November ’18</option>
            <option>December ’18</option>
            <option>January ’19</option>
            <option>February ’19</option>
            <option selected>March ’19</option>
            <option>April ’19</option>
            <option>May ’19</option>
            <option>June ’19</option>
            <option>July ’19</option>
            <option>August ’19</option>
            <option>September ’19</option>
            <option>October ’19</option>
            <option>November ’19</option>
            <option>December ’19</option>
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

          <textarea className="input textarea" placeholder="Add a note...">
          </textarea>

          {/* BEGIN NOTE HISTORY */}
          <div className="notes-activity">
            {/*
            <header className="mt-12">
              <h4 className="tracking-wide border-b border-grey-light uppercase text-sm pb-4">
                Note history
              </h4>
            </header>
            */}
            <div className="note-activity_list text-grey-dark text-sm">
              <div className="flex border-b border-grey-light py-8">
                <span className="w-1/4">
                  9 days ago
                </span>
                <p className="w-3/4">
                  Not sure what he plans to do spoke with him several times and he said when he gets back in Atl. we will meet this week.
                </p>
              </div>
              <div className="flex border-b border-grey-light py-8">
                <span className="w-1/4">
                  15 days ago
                </span>
                <p className="w-3/4">
                  Not sure what he plans to do spoke with him several times and he said when he gets back in Atl. we will meet this week.
                </p>
              </div>
              <div className="flex border-b border-grey-light py-8">
                <span className="w-1/4">
                  22 days ago
                </span>
                <p className="w-3/4">
                  Not sure what he plans to do spoke with him several times and he said when he gets back in Atl. we will meet this week.
                </p>
              </div>
              <div className="flex border-b border-grey-light py-8">
                <span className="w-1/4">
                  1 month ago
                </span>
                <p className="w-3/4">
                  He was super cool, we are now best friends
                </p>
              </div>
              <div className="flex border-b border-grey-light py-8">
                <span className="w-1/4">
                  1 month ago
                </span>
                <p className="w-3/4">
                  He was super cool, we are now best friends
                </p>
              </div>
              <div className="flex -mb-8">
                  <button className="py-6 text-blue block text-base w-full text-center">Show more</button>
              </div>
            </div>
          </div>
          {/* END NOTE HISTORY */}

        </div>
      </section>

      <section className="fixed pin-b actions">
        <div className="container flex items-center px-6 mx-auto max-w-lg">
          <div className="flex-1">
            {/*<button className="btn btn-green">Save</button>*/}
            <Link to="/home-approved-arthur" className="btn btn-green block text-center text-lg">Save</Link>
          </div>
        </div>
      </section>
  </main>
  </div>
)

export default ReferralReviewApproved;
