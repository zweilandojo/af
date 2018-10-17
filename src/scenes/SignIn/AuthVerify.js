import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import logoBlueCircleLg from '../../assets/images/logo-ojo-bg-blue-lg.png';

const AuthVerify = () => (
  <div className="app">
    <header className="container mx-auto text-center">
        <Link className="block" to="/signin">
          <img src={logoBlueCircleLg} className="mt-10 w-16 h-16" alt="logo" />
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
export default AuthVerify;
