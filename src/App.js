import React, { Component, Text } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Logo from './assets/images/ojo-logo.svg';
import iconEmail from './assets/images/icon-ios-email.svg';
import iconPhone from './assets/images/icon-phone.svg';
import iconClose from './assets/images/icon-close.svg';
import iconChevronRight from './assets/images/icon-chevron-right.svg';
import iconChevronLeft from './assets/images/icon-chevron-left.svg';
// import iconCheckmark from './assets/images/icon-checkmark.svg';
import iconCheckboxChecked from './assets/images/icon-checkmark-checked.svg';
import iconCheckboxUnchecked from './assets/images/icon-checkbox-unchecked.svg';
import iconPhoneCircle from './assets/images/icon-phone-circle.svg';
import iconMessageCircle from './assets/images/icon-message-circle.svg';
import profilePlaceholder from './assets/images/profile-placeholder.svg';

const Home = () => (
  <div>
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
        <Link className="inline-block" to="/support">
          Support
        </Link>
      </div>
    </header>

    <div className="app-banner text-center pt-8 pb-8 mb-8">
      <h2 className="mb-2">Matthew Witte</h2>
      <h4 className="font-normal text-gray-dark text-sm">Agent Profile</h4>
    </div>

    <main className="container mx-auto px-6">

      <div className="flex mb-10 referral-tracking">
        <div className="flex-1">
          <h3 className="mb-2">Client Tracking</h3>
          <p className="text-gray-dark font-normal text-xs">Easily track &amp; maintain your clients</p>
        </div>
        <div className="flex-1 flex text-right">
          <small className="flex-1 text-right">
            Weekly Check-Ins
          </small>
          <div className="flex-1 circle-graph">
            <span>33%</span>
          </div>
        </div>
      </div>

      {/* REFERRAL TRACKING LIST */}
      <div className="mb-16">
        <div className="py-4 border-b border-grey-light">
          <div>
            <img src={profilePlaceholder} alt="" />
          </div>
          <div>
            <Link to="/clients/client-1">Gunny Celis</Link>
            <div>
              <img src={iconCheckboxChecked} alt="" />
              <img src={iconCheckboxUnchecked} alt="" />
              <img src={iconCheckboxUnchecked} alt="" />
              <img src={iconCheckboxUnchecked} alt="" />
              <img src={iconCheckboxUnchecked} alt="" />
              <img src={iconCheckboxUnchecked} alt="" />
            </div>
          </div>
        </div>
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
              <span>25%</span>
            </div>
          </div>
          <div className="flex py-4 border-b border-grey-light">
            <div className="flex-1">
              <h4 className="w-16 mb-1 pr-2 uppercase font-normal">Met</h4>
              <p className="text-gray-dark font-normal text-xs">Did you end up meeting with the client?</p>
            </div>
            <div className="text-xl">
              <span>0%</span>
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

const About = () => (
  <div>
    <h2>About</h2>
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
          Client
        </div>
      </div>
    </header>

    <div className="app-banner text-center pt-8 pb-8 mb-8">
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
            <img src={iconMessageCircle} alt="" />
          </div>
          <small className="block text-blue">
            message
          </small>
        </a>
        <a href="tel:15125551234" className="py-6 px-4 block text-center">
          <div>
            <img src={iconPhoneCircle} alt="" />
          </div>
          <small className="block text-blue">
            call
          </small>
        </a>
      </div>
    </div>

    <main className="container px-6">
        <h3>
          {match.params.clientId}
        </h3>
    </main>
  </div>
)

const Support = () => (
  <div className="app">
    <header className="app-header flex">
      <div className="w-1/3">
        <Link to="/" className="inline-block px-6 py-4">
          <img src={iconClose} className="icon icon-close" alt="close icon" />
        </Link>
      </div>
    </header>
    <div className="container mx-auto px-6 mt-12">
      <h1 className="mb-8">Support</h1>
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
          <Route path="/about" component={About}/>
          <Route path="/support" component={Support}/>
          <Route path="/clients" component={Clients}/>
        </div>
      </Router>
    );
  }
}

export default App;
