import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import iconChevronLeftBlue from '../../assets/images/icon-chevron-left.svg';
import iconChatWhite from '../../assets/images/icon-chat-w.png';
import iconPhoneWhite from '../../assets/images/icon-phone-w.png';
import iconEmailWhite from '../../assets/images/icon-email-w.png';
import iconChevronLeftWhite from '../../assets/images/icon-chevron-left-w.png';

class AppHeaderReferral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      referralHeader: null,
      userFullName: "Sofia Perez"
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', function() {
      this.referralHeader = document.getElementById("appReferralHeader");

      //console.log('scrolling');
      //console.log(window.pageYOffset);

      if(window.pageYOffset >= 290 ) {
        //console.log("show");
        if (this.referralHeader != null) {
          this.referralHeader.classList.add("showit");
        }
      } else {
        //console.log("hide");
        if (this.referralHeader != null) {
          if (this.referralHeader.classList.contains('showit')) {
            this.referralHeader.classList.remove("showit");
          }
        }
      }
    })
  }
  componentWillUnmount() {
    this.referralHeader = null;
  }
  render() {
    return (
      <div>

        <header className="h-16 flex fixed pin-t w-full">
          <div className="w-1/3 app-header-back-button">
            <Link to="/" className="block">
              <img src={iconChevronLeftWhite} className="icon icon-chevron-left mr-1 float-left" alt="chevron left" />
            </Link>
          </div>
        </header>

        <header className="app-header-referral fixed flex h-16 bg-white w-full pin-t border-b border-grey-light" id="appReferralHeader">
          <div className="w-1/4 app-header-back-button">
            <Link to="/" className="block">
              <img src={iconChevronLeftBlue} className="icon icon-chevron-left mr-1 float-left" alt="chevron left" />
              {/*<span>Home</span>*/}
            </Link>
          </div>

          <div className="w-1/2 text-center align-middle">
            <div className="mt-6">
              <h4 className="text-black text-lg mb-1 truncate">{this.props.userFullName}</h4>
            </div>
          </div>

          <div className="w-1/4 flex text-center align-middle">
            <a href="sms:15125551234" className="py-6 px-4 block text-center text-blue">
              <div className="btn-contact-icon flex items-center">
                <div className="block w-full flex items-center justify-center">
                  <img src={iconChatWhite} className="w-5" alt="sms message" />
                </div>
              </div>
            </a>
            <a href="tel:15125551234" className="py-6 px-4 block text-center text-blue">
              <div className="btn-contact-icon flex items-center">
                <div className="block w-full flex items-center justify-center">
                  <img src={iconPhoneWhite} className="h-5" alt="" />
                </div>
              </div>
            </a>

            <a href="mailto:referral@domain.com" className="py-6 px-4 block text-center text-blue">
              <div className="btn-contact-icon flex items-center">
                <div className="block w-full flex items-center justify-center">
                  <img src={iconEmailWhite} className="h-5" alt="" />
                </div>
              </div>
            </a>
          </div>
        </header>

      </div>
    )
  }
}

export default AppHeaderReferral;
