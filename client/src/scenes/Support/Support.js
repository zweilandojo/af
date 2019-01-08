import React from 'react'
import { Link } from 'react-router-dom'

// Assets
import iconChevronLeft from '../../assets/images/icon-chevron-left.svg'
import iconPhoneWhite from '../../assets/images/icon-phone-w.png'
import iconEmailWhite from '../../assets/images/icon-email-w.png'
import iconQuestionMarkWhite from '../../assets/images/icon-question-mark-w.png'


const Support = () => (
  <div className="app">
    <header className="app-header fixed pin-t w-full bg-white">
      <div className="flex">
        <div className="w-1/3 app-header-back-button">
          <Link to="/" className="block">
            <img src={iconChevronLeft} className="icon icon-chevron-left mr-1 float-left" alt="back icon" />
            <span>Back</span>
          </Link>
        </div>
        <div className="flex-1 py-6 text-center">
          <span className="inline-block font-bold leading-tight">
            OJO Support
          </span>
        </div>
        <div className="w-1/3 text-right">
          {/* Nothing here */}
        </div>
      </div>
    </header>
    <div className="container mx-auto px-6 mt-24">
      <h1 className="mb-8 text-center text-3xl">
        What can we help<br />you with?
      </h1>
      {/*
      <h4 className="mb-4 text-sm tracking-wide text-grey-dark uppercase">
        Contact Support
      </h4>
      */}
      <div className="max-w-sm mx-auto">
        <a href="https://ojo.zendesk.com/hc/en-us/sections/360003187571-FAQ" className="clearfix mb-4 block py-4 px-4 border border-grey-light rounded-full">
          <div className="float-left mr-4 bg-blue-light rounded-full h-10 w-10 flex items-center justify-center">
            <img className="icon icon-question-mark h-6" src={iconQuestionMarkWhite} alt="phone icon" />
          </div>
          <div className="float-left">
            <span className="block text-lg text-black leading-normal">Frequently Asked Questions</span>
            <span className="block text-sm text-grey-dark">Get answers to common problems</span>
          </div>
        </a>
        <a href="mailto:support@ojolabs.com" className="clearfix mb-4 block py-4 px-4 border border-grey-light rounded-full">
          <div className="float-left mr-4 bg-blue rounded-full h-10 w-10 flex items-center justify-center">
            <img className="icon icon-email w-5" src={iconEmailWhite} alt="email icon" />
          </div>
          <div className="float-left">
            <span className="block text-lg text-black leading-normal">Email us</span>
            <span className="block text-sm text-grey-dark">Typically responds within 24 hours</span>
          </div>
        </a>
        <a href="tel:18669731703" className="clearfix block py-4 px-4 border border-grey-light rounded-full">
          <div className="float-left mr-4 bg-green rounded-full h-10 w-10 flex items-center justify-center">
            <img className="icon icon-phone w-5" src={iconPhoneWhite} alt="phone icon" />
          </div>
          <div className="float-left">
            <span className="block text-lg text-black leading-normal">Call us</span>
            <span className="block text-sm text-grey-dark">Mon-Fri, 9am-6pm CST</span>
          </div>
        </a>
      </div>
    </div>
    {/*
    <div className="text-center text-red py-4 mt-4">
      <p className="text-grey-darker text-sm">v1.1.3</p>
    </div>
    */}

  </div>
)

export default Support;
