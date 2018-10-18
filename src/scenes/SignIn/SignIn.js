import React from 'react';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask'


// Assets
import logoBlueCircleLg from '../../assets/images/logo-ojo-bg-blue-lg.png';


class SignIn extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="container mx-auto text-center">
            <Link className="block" to="/signin">
              <img src={logoBlueCircleLg} className="mt-10 w-14 h-14" alt="logo" />
            </Link>
        </header>
        <main className="container mx-auto px-6 mb-24 pb-8 max-w-400 relative z-10 bg-white">
          <div className="text-center mt-10 m-auto">
            <h2 className="mb-4">Welcome!</h2>
            <p className="mb-8 font-normal font-black text-base leading-normal">
              Enter your mobile number to<br/>view your OJO Referrals
            </p>
            <form>

              <MaskedInput
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                type="tel"
                name="phone"
                className="input mb-4 text-center text-lg"
                placeholder="Phone"
                guide={false}
                id="phone"
                onBlur={() => {}}
                onChange={() => {}}
              />

              {/*
              <input className="input mb-4 text-center text-lg"
                     type="tel" id="phone" name="phone"
                     pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                     required
                     placeholder="Phone" />*/}

              <Link to="/signin-verify" className="text-xl block bg-white w-full h-16 text-blue py-2 px-4 rounded flex items-center justify-center">
                <span>Next</span>
              </Link>
            </form>
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
  }
}
export default SignIn;
