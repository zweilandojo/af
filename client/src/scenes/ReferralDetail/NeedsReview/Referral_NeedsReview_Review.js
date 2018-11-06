import React from 'react';
import { Link } from 'react-router-dom';

import iconChatWhite from '../../../assets/images/icon-chat-w.png';
import iconPhoneWhite from '../../../assets/images/icon-phone-w.png';
import iconEmailWhite from '../../../assets/images/icon-email-w.png';
import iconChevronLeftWhite from '../../../assets/images/icon-chevron-left-w.png';

class ReferralProfile extends React.Component {
  componentDidMount() {
    //window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked || false,
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({ isChecked: !this.state.isChecked })
  }
  render() {
    return(
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
              Buyer <span className="opacity-50 mx-1">&#8226;</span> Referred: Nov 1, 2018
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

              {/* Begin Missing Email State */}
              <div className="py-6 px-4 block text-center opacity-50">
                <div className="btn-contact-icon flex items-center">
                  <div className="block w-full flex items-center justify-center">
                    <img src={iconEmailWhite} className="w-5" alt="" />
                  </div>
                </div>
                <small className="block text-white">
                  email
                </small>
              </div>
              {/* End Missing Email State */}

            </div>
          </div>

          <nav className="nav nav-tabs card-top">
            <div className="max-w-lg mx-auto">
              <div className="tab">
                <Link to="/referral-needsReview-profile">
                  Profile
                </Link>
              </div>
              <div className="tab active">
                <Link to="/referral-needsReview-review">
                  Review
                </Link>
              </div>
            </div>
          </nav>

        </div>

        <main className="container mx-auto px-2 pb-24 max-w-lg">
          <section className="pb-6 mb-6 mt-8">
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
                  <li className="btn-stroked mr-1 mb-3">
                    <label className="">
                      <input
                        type="checkbox"
                        className="checkbox float-left"
                        value={this.state.isChecked}
                        onChange={this.handleChange}
                        checked="true"
                      />
                      <span className="slider"></span>
                      <span className="text">Talk</span>
                    </label>
                  </li>
                  <li className="btn-stroked mr-1 mb-3">
                    <label className="">
                      <input
                        type="checkbox"
                        className="checkbox float-left"
                        value={this.state.isChecked}
                        onChange={this.handleChange}
                      />
                      <span className="slider"></span>
                      <span className="text">Set</span>
                    </label>
                  </li>
                  <li className="btn-stroked mr-1 mb-3">
                    <label className="">
                      <input
                        type="checkbox"
                        className="checkbox float-left"
                        value={this.state.isChecked}
                        onChange={this.handleChange}
                      />
                      <span className="slider"></span>
                      <span className="text">Met</span>
                    </label>
                  </li>
                  <li className="btn-stroked mr-1 mb-3">
                    <label className="">
                      <input
                        type="checkbox"
                        className="checkbox float-left"
                        value={this.state.isChecked}
                        onChange={this.handleChange}
                      />
                      <span className="slider"></span>
                      <span className="text">Offer</span>
                    </label>
                  </li>
                  <li className="btn-stroked mr-1 mb-3">
                    <label className="">
                      <input
                        type="checkbox"
                        className="checkbox float-left"
                        value={this.state.isChecked}
                        onChange={this.handleChange}
                      />
                      <span className="slider"></span>
                      <span className="text">Accept</span>
                    </label>
                  </li>
                  <li className="btn-stroked mr-1 mb-3">
                    <label className="">
                      <input
                        type="checkbox"
                        className="checkbox float-left"
                        value={this.state.isChecked}
                        onChange={this.handleChange}
                      />
                      <span className="slider"></span>
                      <span className="text">Transact</span>
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
                    <input type="radio" className="input-radio mr-2" name="relationship" />
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
                  <option defaultValue>March ’19</option>
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
                <p className="text-grey-dark text-base mb-8">Anything special about this client?</p>

                <textarea className="input textarea" placeholder="What's the situation?">
                </textarea>

                {/* BEGIN Simple notes history */}
                <div className="referral-notes_list_item flex py-4 mt-4">
                  <div className="referral-notes_list_item_content flex w-full">
                    <span className="w-1/4 text-sm text-grey-dark">
                      Nov 2, 2018 11:21 AM
                    </span>
                    <p className="w-3/4 text-black text-sm">
                      Talked with Arthur. Planning to meet next Tuesday.
                    </p>
                  </div>
                </div>
                {/* END Simple notes history */}

              </div>
            </section>

            <section className="fixed pin-b actions">
              <div className="container flex items-center px-6 mx-auto max-w-lg">
                <span className="flex-1 text-xs text-grey-dark">Everything look good?</span>
                <div className="flex-1">
                  <Link to="/home-approved-arthur" className="btn btn-green block text-center text-lg">Save</Link>
                </div>
              </div>
            </section>
        </main>
      </div>
    )
  }
};

export default ReferralProfile;
