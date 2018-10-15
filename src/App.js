import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import logoBlueCircle from './assets/images/logo-ojo-bg-blue.svg';
import logoOJOWhite from './assets/images/ojo-logo-white.svg';
// import iconClose from './assets/images/icon-close.svg';
// import iconChevronRight from './assets/images/icon-chevron-right.svg';
import iconChevronRightgrey from './assets/images/icon-chevron-right-gray.svg';
import iconChevronLeft from './assets/images/icon-chevron-left.svg';
import iconChevronLeftWhite from './assets/images/icon-chevron-left-w.svg';
// import iconCheckmark from './assets/images/icon-checkmark.svg';
import iconCheckboxChecked from './assets/images/icon-checkmark-checked.svg';
import iconCheckboxgrey from './assets/images/icon-checkmark-checked-gray.svg';
// import iconCheckmarkWhite from './assets/images/icon-checkmark-white.svg';
import iconPerson from './assets/images/icon-person.svg';
import iconPhoneCircle from './assets/images/icon-phone-circle.svg';
import iconMessageCircle from './assets/images/icon-message-circle.svg';
import logoGoogle from './assets/images/logo-google.svg';
import logoFB from './assets/images/logo-fb.svg';
import iconChatWhite from './assets/images/icon-chat-w.png';
import iconPhoneWhite from './assets/images/icon-phone-w.png';
import iconEmailWhite from './assets/images/icon-email-w.png';

import AppHeader from './components/AppHeader/index.js';
import AgentHomeBanner from './components/AgentHomeBanner/index.js';
import Milestones from './components/Milestones/index.js';

const SignIn = () => (
  <div className="app">
    <header className="container mx-auto text-center">
        <Link className="block" to="/">
          <img src={logoBlueCircle} className="mt-10" alt="logo" />
        </Link>
    </header>
    <main className="container mx-auto px-6 mb-24 pb-8 max-w-400 relative z-10 bg-white">
      <div className="text-center mt-10 m-auto">
        <h2 className="mb-6">Welcome!</h2>
        <p className="mb-4 font-black text-base">
          Enter your mobile number to view your OJO Referrals
        </p>
        <form>
          <input className="input mb-2"
                 type="tel" id="phone" name="phone"
                 pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                 required
                 placeholder="Enter your mobile phone number" />
          <Link to="/signin-verify" className="btn btn-green inline-block mb-4">
            Next
          </Link>
        </form>

        {/* BEGIN Hiding unused social buttons */}
        <div className="hidden">
          <Link to="/loading" className="btn btn-social btn-fb m-auto mb-4">
            <img src={logoFB} alt="Facebook logo" />
            <span>Continue with Facebook</span>
          </Link>
          <Link to="/loading" className="btn btn-social m-auto btn-google">
            <img src={logoGoogle} alt="Google logo" />
            <span>Continue with Google</span>
          </Link>
        </div>
        {/* END Social buttons */}

      </div>
    </main>
    <footer className="fixed pin-b pin-x pt-16">
      <div className="text-center py-4 text-xs">
        <a href="mailto:support@ojolabs.com" className="inline-block text-grey-dark">support@ojolabs.com</a>
        <span className="mx-2 text-grey">|</span>
        <a href="tel:15124568292" className="inline-block text-grey-dark">(512) 456-8292</a>
        <span className="mx-2 text-grey">|</span>
        <a href="https://content.ojo.me/privacy-policy.pdf" className="inline-block text-grey-dark">Privacy Policy</a></div>
    </footer>
  </div>
)

const AuthVerify = () => (
  <div className="app">
    <header className="container mx-auto text-center">
        <Link className="block" to="/signin">
          <img src={logoBlueCircle} className="mt-10" alt="logo" />
        </Link>
    </header>
    <main className="container mx-auto px-6 mb-24 pb-8 max-w-400 relative z-10 bg-white">
      <div className="text-center mt-10 m-auto">
        <h2 className="mb-6">SMS Verification</h2>
        <p className="mb-4 font-black text-base">
          Enter the 6-digit code sent to you:
        </p>
        <form>
          <input className="input mb-2 text-center text-2xl leading-none"
                 type="number" id="verificationCode"
                 name="verificationCode" required
                 maxLength="6"
                 placeholder="Code" />
          <Link to="/loading" className="btn btn-green inline-block mb-4">
            Verify
          </Link>
        </form>
        <div className="mt-8 leading-normal text-sm">
          <p className="text-grey-dark">Resend code by: <a href="">SMS</a></p>
          <p className="text-grey-dark">Having trouble? <Link to="/Help">Get help</Link></p>
        </div>
      </div>
    </main>
    <footer className="fixed pin-b pin-x pt-16">
      <div className="text-center py-4 text-xs">
        <a href="mailto:support@ojolabs.com" className="inline-block text-grey-dark">support@ojolabs.com</a>
        <span className="mx-2 text-grey">|</span>
        <a href="tel:15124568292" className="inline-block text-grey-dark">(512) 456-8292</a>
        <span className="mx-2 text-grey">|</span>
        <a href="https://content.ojo.me/privacy-policy.pdf" className="inline-block text-grey-dark">Privacy Policy</a></div>
    </footer>
  </div>
)

class Loading extends React.Component {
  render() {
    return (
      <div className="app">
        <main className="flex h-screen items-stretch">
          <div className="self-center flex-1 text-center">
            <Link to="/" className="ojo-loading">
              <img src={logoOJOWhite} className="flex-1 self-center" alt="logo" />
            </Link>
          </div>
        </main>
      </div>
    )
  }
}


const Home = () => (
  <div className="app">
    <AppHeader />
    <AgentHomeBanner />

    <main className="container mx-auto px-2 max-w-lg">

      <div className="referral-tracking clearfix mb-12">
        <h3 className="mb-4 ml-6 text-2xl">
          Referrals
        </h3>
        <div className="border border-grey-light p-8 rounded-lg">
          <div className="clearfix">
            <p className="text-grey-dark float-left text-base mb-6">
              Please review by Wed, Sept 19
            </p>
          </div>

        {/* REFERRAL TRACKING LIST */}
        <div>
          <Link to="/clients/client-1" className="py-4 border-b border-grey-light flex referral-list_needs-review">
            <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-red-light text-white">
              <div className="avatar-initials">G</div>
            </div>
            <div className="flex-initial ml-4">
              <span className="text-lg block mb-1">
                Gunny Celis
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

          <Link to="/clients/client-2" className="py-4 border-b border-grey-light flex referral-list_needs-review">
            <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-red-light text-white">
              <img src={iconPerson} className="avatar-image" alt="avatar" />
              <div className="avatar-initials"></div>
            </div>
            <div className="flex-initial ml-4">
              <span className="text-lg block mb-1">
                17153233415
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

          <Link to="/clients/client-2" className="py-4 border-b border-grey-light flex">
            <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-green-light text-white">
              <div className="avatar-initials">J</div>
            </div>
            <div className="flex-initial ml-4">
              <span className="text-lg block mb-1">
                Javier Benitez
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

          <Link to="/clients/client-4" className="py-4 border-b border-grey-light flex referral-list_reviewed">
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

          <Link to="/clients/client-5" className="py-4 border-b border-grey-light flex referral-list_dead">
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

          <Link to="/clients/client-5" className="pt-4 flex referral-list_dead">
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
    <main className="container mx-auto px-2">
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

const Settings = () => (
  <div>
    <h2>Settings</h2>
  </div>
)

class Client extends Component {
  render() {
    return (
      <div className="app">
        <div className="review-status-wrapper">
          <header className="h-16 flex flex-wrap">
            <div className="w-1/3 app-header-back-button">
              <Link to="/" className="block">
                <img src={iconChevronLeftWhite} className="mr-1 float-left" alt="chevron left" />
              </Link>
            </div>
            {/*
            <div className="w-1/3 text-center align-middle">
              <div className="">
              </div>
            </div>
            */}
          </header>

          <div className="app-banner text-center pt-8 pb-2 mb-8">
            <div className="avatar avatar-lg flex items-center">
              <span className="block w-full text-center mt-2">G</span>
            </div>
            <h2 className="mb-2 text-white">
              {/* {match.params.clientFullName} */}
              {/* {match.params.phoneNumber} */}
              Gunny Celis
            </h2>
            <h4 className="font-normal text-white text-grey-dark text-sm">
              Referred: Aug 29, 2018
            </h4>
            <div className="flex justify-center">
              <a href="sms:15125551234" className="py-6 px-4 block text-center">
                <div className="btn-contact-icon flex items-center">
                  <div className="block w-full text-center">
                    <img src={iconChatWhite} className="" alt="sms message" />
                  </div>
                </div>
                <small className="block text-white">
                  message
                </small>
              </a>
              <a href="tel:15125551234" className="py-6 px-4 block text-center">
                <div className="btn-contact-icon flex items-center">
                  <div className="block w-full text-center">
                    <img src={iconPhoneWhite} className="h-12 w-12" alt="" />
                  </div>
                </div>
                <small className="block text-white">
                  call
                </small>
              </a>
              <a href="mailto:email@address.com" className="py-6 px-4 block text-center">
                <div className="btn-contact-icon flex items-center">
                  <div className="block w-full text-center">
                    <img src={iconEmailWhite} className="h-12 w-12" alt="" />
                  </div>
                </div>
                <small className="block text-white">
                  email
                </small>
              </a>
            </div>
          </div>

          <nav className="nav nav-tabs card-top">
            <div className="tab">
              <Link to="/clients/client-1">
                Profile
              </Link>
            </div>
            <div className="tab active">
              <Link to="/clients/client-1/review">
                Review
              </Link>
            </div>
          </nav>
      </div>

        <main className="container mx-auto px-6 pb-24 max-w-lg">
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

                  <li className="btn-stroked mr-1 mb-3">
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
                  <option>January ’19</option>
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
  }
}

const Help = () => (
  <div className="app">
    <header className="app-header flex">
      <div className="w-1/3 app-header-back-button">
        <Link to="/" className="inline-block px-6 py-6">
          <img src={iconChevronLeft} className="icon icon-chevron-left mr-1 float-left" alt="close icon" />
        </Link>
      </div>
      <div className="w-1/3 text-center">
        <h6 className="text-base font-medium py-6 leading-normal">
          OJO Support
        </h6>
      </div>
      <div className="w-1/3 text-right">
        {/* Nothing here */}
      </div>
    </header>
    <div className="container mx-auto px-6 mt-8">
      <h1 className="mb-8 text-center text-3xl">
        What can we help<br />you with?
      </h1>
      {/*
      <h4 className="mb-4 text-sm tracking-wide text-grey-dark uppercase">
        Contact Support
      </h4>
      */}
      <div className="max-w-sm mx-auto">
        <a href="mailto:support@ojolabs.com" className="clearfix mb-4 block py-4 px-4 shadow rounded-full">
          <div className="float-left mr-4 bg-blue rounded-full h-10 w-10 text-center">
            <img className="icon icon-email mt-3" src={iconEmailWhite} alt="email icon" />
          </div>
          <div className="float-left">
            <span className="block text-lg text-black leading-normal">Email us</span>
            <span className="block text-sm text-grey-dark">Typically responds within 24 hours</span>
          </div>
        </a>
        <a href="tel:18669731703" className="clearfix block py-4 px-4 shadow rounded-full">
          <div className="float-left mr-4 bg-green rounded-full h-10 w-10 text-center">
            <img className="icon icon-phone mt-2 pt-1" src={iconPhoneWhite} alt="phone icon" />
          </div>
          <div className="float-left">
            <span className="block text-lg text-black leading-normal">Call us</span>
            <span className="block text-sm text-grey-dark">Mon-Fri, 9am-6pm CST</span>
          </div>
        </a>
      </div>
    </div>
    <div className="text-center bg-white border-t border-b border-grey-light mt-32">
      <Link to="/signin" className="block text-red text-lg py-6">Sign Out</Link>
    </div>
    {/*
    <div className="text-center text-red py-4 mt-4">
      <p className="text-grey-darker text-sm">v1.0.9</p>
    </div>
    */}
  </div>
)

const Clients = ({ match }) => (
  <div>
    <Route path={`${match.path}/:clientId`} component={Client}/>
    <Route exact path={match.path} render={() => (
      <h3>Client List</h3>
    )}/>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/settings" component={Settings}/>
          <Route path="/help" component={Help}/>
          <Route path="/clients" component={Clients}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signin-verify" component={AuthVerify}/>
          <Route path="/loading" component={Loading}/>
        </div>
      </Router>
    );
  }
}

export default App;
