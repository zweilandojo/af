import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Logo from './assets/images/ojo-logo.svg';
import logoBlueCircle from './assets/images/logo-ojo-bg-blue.svg';
import logoOJOWhite from './assets/images/ojo-logo-white.svg';
import iconEmail from './assets/images/icon-ios-email.svg';
import iconPhone from './assets/images/icon-phone.svg';
import iconClose from './assets/images/icon-close.svg';
import iconPerson from './assets/images/icon-person.svg';
// import iconChevronRight from './assets/images/icon-chevron-right.svg';
import iconChevronRightGray from './assets/images/icon-chevron-right-gray.svg';
import iconChevronLeft from './assets/images/icon-chevron-left.svg';
// import iconCheckmark from './assets/images/icon-checkmark.svg';
import iconCheckboxChecked from './assets/images/icon-checkmark-checked.svg';
import iconCheckboxUnchecked from './assets/images/icon-checkbox-unchecked.svg';
import iconCheckboxGray from './assets/images/icon-checkmark-checked-gray.svg';
// import iconCheckmarkWhite from './assets/images/icon-checkmark-white.svg';
import iconPhoneCircle from './assets/images/icon-phone-circle.svg';
import iconMessageCircle from './assets/images/icon-message-circle.svg';
import logoGoogle from './assets/images/logo-google.svg';
import logoFB from './assets/images/logo-fb.svg';
import weatherPartlySunny from './assets/images/weather/partly-sunny.svg';

const SignIn = () => (
  <div className="app">
    <header className="container mx-auto text-center">
        <Link className="block" to="/">
          <img src={logoBlueCircle} className="mt-10" alt="logo" />
        </Link>
    </header>
    <main className="container mx-auto px-6 sign-in">
      <div className="text-center mt-10 m-auto">
        <h2 className="mb-6">Welcome!</h2>
        <p className="mb-4 font-black text-base">
          Sign in to view your OJO referrals:
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
    <footer className="fixed pin-b pin-x">
      <div className="text-center py-4 text-xs">
        <a href="mailto:support@ojolabs.com" className="inline-block text-gray-dark">support@ojolabs.com</a>
        <span className="mx-2 text-gray">|</span>
        <a href="tel:15124568292" className="inline-block text-gray-dark">(512) 456-8292</a>
        <span className="mx-2 text-gray">|</span>
        <a href="https://content.ojo.me/privacy-policy.pdf" className="inline-block text-gray-dark">Privacy Policy</a></div>
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
    <main className="container mx-auto px-6 sign-in">
      <div className="text-center mt-10 m-auto">
        <h2 className="mb-6">SMS Verification</h2>
        <p className="mb-4 font-black text-base">
          Enter the 6-digit code sent to you:
        </p>
        <form>
          <input className="input mb-2 text-center text-2xl leading-none"
                 type="number" id="verificationCode"
                 name="verificationCode" required
                 maxlength="4"
                 placeholder="Code" />
          <Link to="/loading" className="btn btn-green inline-block mb-4">
            Verify
          </Link>
        </form>
        <div className="mt-8 leading-normal text-sm">
          <p className="text-gray-dark">Resend code by: <a href="">SMS</a></p>
          <p className="text-gray-dark">Having trouble? <Link to="/Help">Get help</Link></p>
        </div>

      </div>
    </main>
    <footer className="fixed pin-b pin-x">
      <div className="text-center py-4 text-xs">
        <a href="mailto:support@ojolabs.com" className="inline-block text-gray-dark">support@ojolabs.com</a>
        <span className="mx-2 text-gray">|</span>
        <a href="tel:15124568292" className="inline-block text-gray-dark">(512) 456-8292</a>
        <span className="mx-2 text-gray">|</span>
        <a href="https://content.ojo.me/privacy-policy.pdf" className="inline-block text-gray-dark">Privacy Policy</a></div>
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
    <header className="app-header flex content-start flex-wrap">
      <div className="w-1/3">
        {/* waiting for menu */}
      </div>
      <div className="w-1/3 text-center align-middle">
        <Link className="block" to="/">
          <img src={Logo} className="app-logo" alt="logo" />
        </Link>
      </div>
      <div className="w-1/3 text-right align-middle app-header-ctas">
        <Link className="inline-block" to="/help">
          Help
        </Link>
      </div>
    </header>

    <div className="text-center pt-16 pb-10 mb-8">
      <h2 className="mb-2 text-3xl">Morning, Matt!</h2>
      <p className="text-gray-dark text-base flex items-start justify-center">
        <img src={weatherPartlySunny} className="mr-2" alt="Partly Sunny" />
        <span className="inline-block">Mostly Sunny 90° F</span>
      </p>
    </div>

    <main className="container mx-auto px-2">

      <div className="referral-tracking clearfix mb-12">
        <h3 className="mb-4 ml-6 text-2xl">
          Referrals
        </h3>
        <div className="border border-grey-light p-8 rounded-lg">
          <div className="clearfix">
            <p className="text-gray-dark float-left text-base mb-6">
              Please review by Wed, Sept 5
            </p>

            {/* Circular Chart Begin
            <div className="circular-chart-wrapper">
              <svg viewBox="0 0 36 36" className="circular-chart circular-chart-back">
                <path className="circle"
                  strokeDasharray="100, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path className="circle"
                  strokeDasharray="25, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <span className="circular-chart-percentage">
                25<sup className="percentage-sign">%</sup>
              </span>
            </div>
             Circular Chart End */}
          </div>

        {/* REFERRAL TRACKING LIST */}
        <div className="clear">

          {/* BEGIN: REFERRAL LIST ZERO STATE */}
          <p className="text-center text-base text-gray">No referrals assigned.</p>
          <div to="/clients/client-1" className="py-4 border-b border-grey-light flex">
            <div className="rounded-full flex justify-center h-10 w-10 bg-gray-light">
              {/* Nothing here */}
            </div>
            <div className="flex-initial ml-4 ">
              <span className="h-3 w-24 rounded-full bg-gray-light block mb-2">
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
          <div to="/clients/client-1" className="py-4 border-b border-grey-light flex">
            <div className="rounded-full flex justify-center h-10 w-10 bg-gray-light">
              {/* Nothing here */}
            </div>
            <div className="flex-initial ml-4 ">
              <span className="h-3 w-24 rounded-full bg-gray-light block mb-2">
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
          <div to="/clients/client-1" className="py-4 border-b border-grey-light flex">
            <div className="rounded-full flex justify-center h-10 w-10 bg-gray-light">
              {/* Nothing here */}
            </div>
            <div className="flex-initial ml-4 ">
              <span className="h-3 w-24 rounded-full bg-gray-light block mb-2">
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
          {/* END: REFERRAL LIST ZERO STATE */}


          <Link to="/clients/client-1" className="py-4 border-b border-grey-light flex">
            <div className="rounded-full flex items-center justify-center h-10 w-10 bg-red-light text-white">
              GC
            </div>
            <div className="flex-initial ml-4">
              <span className="text-lg block mb-1">
                Gunny Celis
              </span>
              <div>
                <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-1" alt="" />
                <span className="ml-1 inline text-gray-dark text-xs">Talk</span>
              </div>
            </div>
            <div className="flex-1 text-right">
              <div>
                <span className="text-red text-base mr-1">Review</span>
              </div>
            </div>
          </Link>

          <Link to="/clients/client-2" className="py-4 border-b border-grey-light flex">
            <div className="rounded-full flex items-center justify-center h-10 w-10 bg-red-light text-white">
              SK
            </div>
            <div className="flex-initial ml-4">
              <span className="text-lg block mb-1">
                Stephan Kiker
              </span>
              <div>
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-1" alt="" />
                <span className="ml-1 inline text-gray-dark text-xs"></span>
              </div>
            </div>
            <div className="flex-1 text-right">
              <div>
                <span className="text-red text-base mr-1">Review</span>
              </div>
            </div>
          </Link>

          <Link to="/clients/client-2" className="py-4 border-b border-grey-light flex">
            <div className="rounded-full flex items-center justify-center h-10 w-10 bg-green-light text-white">
              JB
            </div>
            <div className="flex-initial ml-4">
              <span className="text-lg block mb-1">
                Javier Benitez
              </span>
              <div>
                <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-1" alt="" />
                <span className="ml-1 inline text-gray-dark text-xs">Set</span>
              </div>
            </div>
            <div className="flex-1 text-right">
              <div>
                <span className="text-red text-sm mr-1"></span>
                <img src={iconChevronRightGray} className="svg-gray" alt="" />
              </div>
            </div>
          </Link>

          <Link to="/clients/client-4" className="pt-4 flex">
            <div className="rounded-full flex items-center justify-center h-10 w-10 bg-gray-light text-white">
              DJ
            </div>
            <div className="flex-initial ml-4">
              <span className="text-lg block mb-1">
                Deadicous Jones
              </span>
              <div>
                <img src={iconCheckboxGray} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxGray} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxGray} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-px" alt="" />
                <img src={iconCheckboxUnchecked} className="h-3 w-3 mr-1" alt="" />
                <span className="ml-1 inline text-gray-dark text-xs">Met</span>
              </div>
            </div>
            <div className="flex-1 text-right">
              <div>
                <span className="text-red text-sm mr-1"></span>
                <img src={iconChevronRightGray} className="svg-gray" alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      </div>

      <div className="milestone-count mb-16">
        <h3 className="mb-4 ml-6 text-2xl">
          Milestones
        </h3>
        <div className="border border-grey-light p-8 rounded-lg">
          <p className="text-gray-dark text-base mb-6">
            A brief overview of your business
          </p>
          <div className="flex py-4">
            <div className="text-lg bg-gray-light rounded-full h-16 w-16 text-center mr-4">
              <span className="inline-block mt-6">75%</span>
            </div>
            <div className="flex-1">
              <h4 className="w-16 mb-2 pr-2 uppercase font-lg">Talk</h4>
              <p className="text-gray-dark font-normal text-sm">Have you made first contact?</p>
            </div>
          </div>
          <div className="flex py-4">
            <div className="text-lg bg-gray-light rounded-full h-16 w-16 text-center mr-4">
              <span className="inline-block mt-6">50%</span>
            </div>
            <div className="flex-1">
              <h4 className="w-16 mb-2 pr-2 uppercase font-lg">Set</h4>
              <p className="text-gray-dark font-normal text-sm">Have you scheduled a time to meet in-person?</p>
            </div>
          </div>
          <div className="flex py-4">
            <div className="text-lg bg-gray-light rounded-full h-16 w-16 text-center mr-4">
              <span className="inline-block mt-6">25%</span>
            </div>
            <div className="flex-1">
              <h4 className="w-16 mb-2 pr-2 uppercase font-lg">Met</h4>
              <p className="text-gray-dark font-normal text-sm">Did you meet the referral in-person?</p>
            </div>
          </div>

          <div className="flex py-4">
            <div className="text-lg bg-gray-light rounded-full h-16 w-16 text-center mr-4">
              <span className="inline-block mt-6">0%</span>
            </div>
            <div className="flex-1">
              <h4 className="w-16 mb-2 pr-2 uppercase font-lg">Offer</h4>
              <p className="text-gray-dark font-normal text-sm">Has your client made an offer on a home yet?</p>
            </div>
          </div>
          <div className="flex py-4">
            <div className="text-lg bg-gray-light rounded-full h-16 w-16 text-center mr-4">
              <span className="inline-block mt-6">0%</span>
            </div>
            <div className="flex-1">
              <h4 className="w-16 mb-2 pr-2 uppercase font-lg">Accept</h4>
              <p className="text-gray-dark font-normal text-sm">Has the seller accepted your clients offer?</p>
            </div>
          </div>
          <div className="flex py-4">
            <div className="text-lg bg-gray-light rounded-full h-16 w-16 text-center mr-4">
              <span className="inline-block mt-6">0%</span>
            </div>
            <div className="flex-1">
              <h4 className="w-16 mb-2 pr-2 uppercase font-lg">Transact</h4>
              <p className="text-gray-dark font-normal text-sm">Has your client closed on a home?</p>
            </div>
          </div>
        </div>
      </div>

    </main>
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
        <header className="app-header flex flex-wrap">
          <div className="w-1/3 app-header-back-button">
            <Link to="/" className="block">
              <img src={iconChevronLeft} className="mr-1 float-left" alt="chevron left" />
              <span>Home</span>
            </Link>
          </div>
          <div className="w-1/3 text-center align-middle">
            <div className="app-header-title">
              Referral
            </div>
          </div>
        </header>

        <div className="app-banner bg-gray-lightest text-center pt-8 pb-2 mb-8">
          <h2 className="mb-2">
            {/* {match.params.clientId} */}
            Gunny Celis
          </h2>
          <h4 className="font-normal text-gray-dark text-sm">
            Austin, TX
          </h4>
          <div className="flex justify-center">
            <a href="sms:15125551234" className="py-6 px-4 block text-center">
              <div>
                <img src={iconMessageCircle} className="h-12 w-12" alt="sms message" />
              </div>
              <small className="block text-blue">
                message
              </small>
            </a>
            <a href="tel:15125551234" className="py-6 px-4 block text-center">
              <div>
                <img src={iconPhoneCircle} className="h-12 w-12" alt="" />
              </div>
              <small className="block text-blue">
                call
              </small>
            </a>
          </div>
        </div>

        <main className="container mx-auto px-6 pb-24">
          <section className="pb-6 mb-6 border-b border-gray-lightest">
              <header className="mb-6">
                <h3 className="mb-2">
                  Progress
                  <span className="ml-2 text-sm text-gray float-right">(0% complete)</span>
                </h3>
                <p className="text-gray-dark text-xs">Which steps have you completed?</p>
              </header>
              <div className="">
                <ul className="list-reset text-center">

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

            <section className="pb-6 mb-6 border-b border-gray-lightest">
              <header className="mb-4">
                <h3 className="mb-2">
                  Rate your relationship
                </h3>
                <p className="text-gray-dark text-xs">How are things working out?</p>
              </header>
              <form className="">
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

            <section className="pb-6 mb-6 border-b border-gray-lightest">
              <header className="mb-4">
                <h3 className="mb-2">
                  Projected close month
                </h3>
                <p className="text-gray-dark text-xs">
                  When do you think they’ll close?
                </p>
              </header>
              <div>
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
                <h3 className="mb-2">
                  Notes
                </h3>
                <p className="text-gray-dark text-xs">
                  Anything special about this client?
                </p>
              </header>
              <div>
                <textarea className="input textarea" placeholder="What's the situation?">
                </textarea>
              </div>
            </section>

            <section className="fixed pin-b actions">
              <div className="container flex items-center px-6 mx-auto">
                <span className="flex-1 text-xs text-gray-dark">Everything look good?</span>
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
    <header className="app-header flex flex-row-reverse">
      <div className="w-1/3 text-right">
        <Link to="/" className="inline-block px-6 py-4">
          <img src={iconClose} className="icon icon-close" alt="close icon" />
        </Link>
      </div>
    </header>
    <div className="container mx-auto px-6 mt-12">
      <h1 className="mb-10">Help &amp; Feedback</h1>
      <h4 className="mb-4">OJO Labs Contact Info</h4>
      <div>
        <a href="mailto:support@ojolabs.com" className="block py-4 border-t border-b border-grey-light">
          <span>support@ojolabs.com</span>
          <img src={iconEmail} className="icon icon-email float-right" alt="email icon" />
        </a>
        <a href="tel:18669731703" className="block py-4 border-b border-grey-light">
          <span>+1 (866) 973-1703</span>
          <img className="icon icon-phone float-right" src={iconPhone} alt="phone icon" />
        </a>
      </div>
      <div className="mt-16 text-right">
        <Link to="/signin">Sign out</Link>
      </div>
    </div>
  </div>
)

const Clients = ({ match }) => (
  <div>
    {/*
    <h2>Clients</h2>
    <ul>
      <li>
        <Link to={`${match.url}/client-1`}>
          Gunny Celis
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/client-2`}>
          Stephan Kiker
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/client-3`}>
          Javier Benitiz
        </Link>
      </li>
    </ul>
    */}

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
