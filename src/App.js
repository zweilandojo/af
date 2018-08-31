import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Logo from './assets/images/ojo-logo.svg';
import logoSilver from './assets/images/ojo-logo-silver.svg';
import ojoHappy from './assets/images/avatars/ojo-face/happy.png';
import iconEmail from './assets/images/icon-ios-email.svg';
import iconPhone from './assets/images/icon-phone.svg';
import iconClose from './assets/images/icon-close.svg';
import iconChevronRight from './assets/images/icon-chevron-right.svg';
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

const SignIn = () => (
  <div className="app">
    <header className="container mx-auto text-center px-6">
        <Link className="block" to="/">
          <img src={Logo} className="app-logo -ml-px" alt="logo" />
        </Link>
    </header>
    <main className="container mx-auto px-6">
      <div className="text-center mt-24">
        <h2 className="mb-4 font-black text-3xl">Welcome to the OJO Referral Tracker!</h2>
        <p className="mb-8 text-gray-dark">Sign in to manage your OJO referrals:</p>
        <Link to="/loading" className="btn btn-social btn-fb m-auto mb-4">
          <img src={logoFB} alt="Facebook logo" />
          <span>Continue with Facebook</span>
        </Link>
        <Link to="/loading" className="btn btn-social m-auto btn-google">
          <img src={logoGoogle} alt="Google logo" />
          <span>Continue with Google</span>
        </Link>
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
        <header className="container mx-auto text-center px-6">
            <Link className="block" to="/">
              <img src={logoSilver} className="app-logo -ml-px" alt="logo" />
            </Link>
            <div className="right-nav-placeholder"></div>
        </header>
        <main className="container mx-auto mt-32 text-center">
          <div>
            <img src={ojoHappy} alt="Happy OJO" className="h-16 w-16 mb-4" />
          </div>
          <h3 className="mb-8">Welcome!</h3>
          <div className="relative mx-auto">
            <div className="loader" id="loader"></div>
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

    <div className="app-banner text-center pt-8 pb-8 mb-8">
      <h2 className="mb-2">Matthew Witte</h2>
      <h4 className="font-normal text-gray-dark text-sm">BHG HomeCity</h4>
    </div>

    <main className="container mx-auto px-6">

      <div className="mb-4 referral-tracking clearfix">
        <div className="float-left">
          <h3 className="mb-2">Referrals</h3>
          <p className="text-gray-dark font-normal text-xs">
          Track &amp; maintain your OJO leads</p>
        </div>
        <div className="weekly-check-ins">
          <small className="text-gray-dark weekly-check-ins_title">
            Sign-off by:<br />[Wed]
          </small>
          {/* Circular Chart Begin */}
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
          {/* Circular Chart End */}

        </div>
      </div>

      {/* REFERRAL TRACKING LIST */}
      <div className="mb-10 clear">
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
              <span className="text-red text-sm mr-1">Needs Review</span>
              <img src={iconChevronRight} alt="" />
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
              <span className="text-red text-sm mr-1">Needs Review</span>
              <img src={iconChevronRight} alt="" />
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

        <Link to="/clients/client-4" className="py-4 border-b border-grey-light flex">
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

      <div className="milestone-count mb-16">
        <h3 className="mb-2 text-xl">
          Milestone Count
        </h3>
        <p className="text-gray-dark text-xs mb-4">
          A brief overview of your business
        </p>

        <div className="">
          <div className="flex py-4 border-b border-grey-light">
            <div className="flex-1">
              <h4 className="w-16 mb-1 pr-2 uppercase font-normal">Talk</h4>
              <p className="text-gray-dark font-normal text-xs">Have you spoken to the client yet?</p>
            </div>
            <div className="text-xl">
              <span>75%</span>
            </div>
          </div>
          <div className="flex py-4 border-b border-grey-light">
            <div className="flex-1">
              <h4 className="w-16 mb-1 pr-2 uppercase font-normal">Set</h4>
              <p className="text-gray-dark font-normal text-xs">Have you scheduled a time to meet the client?</p>
            </div>
            <div className="text-xl">
              <span>50%</span>
            </div>
          </div>
          <div className="flex py-4 border-b border-grey-light">
            <div className="flex-1">
              <h4 className="w-16 mb-1 pr-2 uppercase font-normal">Met</h4>
              <p className="text-gray-dark font-normal text-xs">Did you end up meeting with the client?</p>
            </div>
            <div className="text-xl">
              <span>25%</span>
            </div>
          </div>
          <div className="flex py-4 border-b border-grey-light">
            <div className="flex-1">
              <h4 className="w-16 mb-1 pr-2 uppercase font-normal">Offer</h4>
              <p className="text-gray-dark font-normal text-xs">Has the client made an offer on a home?</p>
            </div>
            <div className="text-xl">
              <span>0%</span>
            </div>
          </div>
          <div className="flex py-4 border-b border-grey-light">
            <div className="flex-1">
              <h4 className="w-16 mb-1 pr-2 uppercase font-normal mb-1">Accept</h4>
              <p className="text-gray-dark font-normal text-xs">Has the seller accepted your clients offer?</p>
            </div>
            <div className="text-xl">
              <span>0%</span>
            </div>
          </div>
          <div className="flex py-4 border-b border-grey-light">
            <div className="flex-1">
              <h4 className="w-16 mb-1 pr-2 uppercase font-normal">Transact</h4>
              <p className="text-gray-dark font-normal text-xs">Has your client closed on a new home?</p>
            </div>
            <div className="text-xl">
              <span>0%</span>
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

const Client = ({ match }) => (
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

    <div className="app-banner text-center pt-8 pb-4 mb-8">
      <h2 className="mb-2">
        Gunny Celis
        {/* {match.params.clientId} */}
        {match.params.clientName}
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
              Referral Progress
              <span className="ml-2 text-sm text-gray">(0% complete)</span>
            </h3>
            <p className="text-gray-dark text-xs">Check the box if you have completed this step</p>
          </header>
          <div className="flex">
            <div className="flex-1 text-center">
              <label className="text-base input-radio-container input-radio-lg">Talk
                <input type="radio" className="input-radio mr-2" name="client-progress" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="flex-1 text-center">
              <label className="text-base input-radio-container input-radio-lg">Set
                <input type="radio" className="input-radio mr-2" name="client-progress" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="flex-1 text-center">
              <label className="text-base input-radio-container input-radio-lg">Met
                <input type="radio" className="input-radio mr-2" name="client-progress" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="flex-1 text-center">
              <label className="text-base input-radio-container input-radio-lg">Offer
                <input type="radio" className="input-radio mr-2" name="client-progress" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="flex-1 text-center">
              <label className="text-base input-radio-container input-radio-lg">Accept
                <input type="radio" className="input-radio mr-2" name="client-progress" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="flex-1 text-center">
              <label className="text-base input-radio-container input-radio-lg">Transact
                <input type="radio" className="input-radio mr-2" name="client-progress" />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </section>

        <section className="pb-6 mb-6 border-b border-gray-lightest">
          <header className="mb-4">
            <h3 className="mb-2">
              Relationship Quality
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
                <input type="radio" className="input-radio mr-2" checked="checked" name="relationship" />
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
              Projected Close Month
            </h3>
            <p className="text-gray-dark text-xs">
              When do you think they’ll close?
            </p>
          </header>
          <div>
            <select className="input select">
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

const Help = () => (
  <div className="app">
    <header className="app-header flex">
      <div className="w-1/3">
        <Link to="/" className="inline-block px-6 py-4">
          <img src={iconClose} className="icon icon-close" alt="close icon" />
        </Link>
      </div>
    </header>
    <div className="container mx-auto px-6 mt-12">
      <h1 className="mb-8">Help</h1>
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
      <div className="mt-16">
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
          <Route path="/loading" component={Loading}/>
        </div>
      </Router>
    );
  }
}

export default App;
