import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import iconChatWhite from '../../../assets/images/icon-chat-w.png';
import iconPhoneWhite from '../../../assets/images/icon-phone-w.png';
import iconEmailWhite from '../../../assets/images/icon-email-w.png';
import iconActivityList from '../../../assets/images/icons/icon-activity-list.png';
import iconNoteList from '../../../assets/images/icons/icon-note-list.png';
import logoBlueCircle from '../../../assets/images/logo-ojo-bg-blue.png';


// Components
import AppHeaderReferral from '../../../components/AppHeaderReferral/index.js';

class ReferralProfile extends React.Component {
  componentDidMount() {
    //window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked || false,
      isHistoryShown: props.isHistoryShown || false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleToggleNoteHistory = this.handleToggleNoteHistory.bind(this);
  }
  handleChange() {
    this.setState({ isChecked: !this.state.isChecked })
  }
  handleToggleNoteHistory() {
    // Toggles visiblity of Note History (i.e. Activity List)
    const activityListContainer = document.getElementById('activity-list-container')
    const btnShowNotes = document.getElementById('btnShowNotes')
    btnShowNotes.style.display = 'none'
    this.setState({ isHistoryShown: !this.state.isHistoryShown })
    console.log(this);
    if(this.state.isHistoryShown === false) {
      activityListContainer.classList.remove("hide")
      activityListContainer.classList.add("show")
    } else {
      activityListContainer.classList.remove("show")
      activityListContainer.classList.add("hide")
    }
  }
  render() {
    return(
      <div className="app">
        <div className="review-status-wrapper review-status_needs-review">
          {/* Begin: Fixed App Header for Referrals */}
          <AppHeaderReferral userFullName="Sofia Perez" />
          {/* End: Fixed App Header for Referrals */}

          <div className="app-banner text-center mb-6 pt-16">
            <div className="avatar avatar-lg flex items-center">
              <span className="block w-full text-center mt-2">S</span>
            </div>
            <h2 className="mb-2 text-white">
              Sofia Perez
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

          <section className="mt-10 mb-8">
            <header className="flex mx-4">
              <h3 className="mb-4 text-2xl flex-1">
                Status
              </h3>
              <div className="flex-1 text-right leading-normal">
                {/* <Link to="/" className="text-base text-grey-dark mr-6">Hibernate</Link> */}
                <Link to="/modal-release-referral" className="text-base text-grey-dark underline">Release...</Link>
              </div>
            </header>
            <div className="border-t border-grey-light py-6 px-4">
              <ul className="list-reset block">
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
                    <span className="text">Connected</span>
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
                    <span className="text">Showing Homes</span>
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
                    <span className="text">Accepted</span>
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
                    <span className="text">Closed</span>
                  </label>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <header className="mb-5 mx-4">
              <h3 className="text-2xl">
                Communication
              </h3>
            </header>
            <div className="border-t border-grey-light py-6 px-4">
              <ul className="list-reset block">
                <li className="btn-stroked mr-1 mb-3">
                  <label className="">
                    <input
                      type="radio"
                      className="checkbox float-left"
                      value={this.state.isChecked}
                      onChange={this.handleChange}
                      name="responsiveness"
                    />
                    <span className="slider"></span>
                    <span className="text">Responsive</span>
                  </label>
                </li>
                <li className="btn-stroked mr-1 mb-3">
                  <label className="">
                    <input
                      type="radio"
                      className="checkbox float-left"
                      value={this.state.isChecked}
                      onChange={this.handleChange}
                      name="responsiveness"
                    />
                    <span className="slider"></span>
                    <span className="text">Unresponsive</span>
                  </label>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <header className="mb-5 mx-4">
              <h3 className="text-2xl">
                Pre-Approval
              </h3>
            </header>
            <div className="border-t border-grey-light py-6 px-4">
              <ul className="list-reset block">
                <li className="btn-stroked mr-1 mb-3">
                  <label className="">
                    <input
                      type="radio"
                      className="checkbox float-left"
                      value={this.state.isChecked}
                      onChange={this.handleChange}
                      name="pre-approval"
                    />
                    <span className="slider"></span>
                    <span className="text">Pre-approved</span>
                  </label>
                </li>
                <li className="btn-stroked mr-1 mb-3">
                  <label className="">
                    <input
                      type="radio"
                      className="checkbox float-left"
                      value={this.state.isChecked}
                      onChange={this.handleChange}
                      name="pre-approval"
                    />
                    <span className="slider"></span>
                    <span className="text">In-progress</span>
                  </label>
                </li>
                <li className="btn-stroked mr-1 mb-3">
                  <label className="">
                    <input
                      type="radio"
                      className="checkbox float-left"
                      value={this.state.isChecked}
                      onChange={this.handleChange}
                      name="pre-approval"
                    />
                    <span className="slider"></span>
                    <span className="text">Not started</span>
                  </label>
                </li>
                <li className="btn-stroked mr-1 mb-3">
                  <label className="">
                    <input
                      type="radio"
                      className="checkbox float-left"
                      value={this.state.isChecked}
                      onChange={this.handleChange}
                      name="pre-approval"
                    />
                    <span className="slider"></span>
                    <span className="text">Denied</span>
                  </label>
                </li>
                <li className="btn-stroked mr-1 mb-3">
                  <label className="">
                    <input
                      type="radio"
                      className="checkbox float-left"
                      value={this.state.isChecked}
                      onChange={this.handleChange}
                      name="pre-approval"
                    />
                    <span className="slider"></span>
                    <span className="text">Unknown</span>
                  </label>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <header className="mb-5 mx-4">
              <h3 className="text-2xl">
                Credit
              </h3>
            </header>
            <div className="border-t border-grey-light py-6 px-4">
              <ul className="list-reset block">
                <li className="btn-stroked mr-1 mb-3">
                  <label className="">
                    <input
                      type="radio"
                      className="checkbox float-left"
                      value={this.state.isChecked}
                      onChange={this.handleChange}
                      name="credit"
                    />
                    <span className="slider"></span>
                    <span className="text">Good</span>
                  </label>
                </li>
                <li className="btn-stroked mr-1 mb-3">
                  <label className="">
                    <input
                      type="radio"
                      className="checkbox float-left"
                      value={this.state.isChecked}
                      onChange={this.handleChange}
                      name="credit"
                    />
                    <span className="slider"></span>
                    <span className="text">Repairing</span>
                  </label>
                </li>
                <li className="btn-stroked mr-1 mb-3">
                  <label className="">
                    <input
                      type="radio"
                      className="checkbox float-left"
                      value={this.state.isChecked}
                      onChange={this.handleChange}
                      name="credit"
                    />
                    <span className="slider"></span>
                    <span className="text">Poor</span>
                  </label>
                </li>
                <li className="btn-stroked mr-1 mb-3">
                  <label className="">
                    <input
                      type="radio"
                      className="checkbox float-left"
                      value={this.state.isChecked}
                      onChange={this.handleChange}
                      name="credit"
                    />
                    <span className="slider"></span>
                    <span className="text">Unknown</span>
                  </label>
                </li>
              </ul>
            </div>
          </section>

            {/*
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
            */}

            <section className="mb-12">
              <header className="mb-5 mx-4">
                <h3 className="text-2xl">
                  Projected closing month
                </h3>
              </header>
              <div className="border-t border-grey-light py-6 px-4">
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

            <section className="mb-8">
              <header className="mb-5 mx-4">
                <h3 className="text-2xl">

                <img src={iconNoteList} className="w-6" alt="note list" />
                <span className="inline-block ml-4">Notes</span>
                </h3>
              </header>
              <div className="border-t border-grey-light py-6 px-4">
                <textarea className="input textarea" placeholder="Write a note...">
                </textarea>
                <button
                  className="mt-8 block mx-auto text-blue text-base outline-none"
                  onClick={this.handleToggleNoteHistory}
                  id="btnShowNotes"
                >
                  View Note History
                </button>
              </div>
            </section>

            <section className="mb-24 hide" id="activity-list-container">
              <header className="mb-8 mx-4">
                <h3 className="text-2xl">
                  <img src={iconActivityList} className="w-6" alt="activity list" />
                  <span className="inline-block ml-4">Activity</span>
                </h3>
              </header>
              <div className="activity-list px-4">
                <div className="mb-6 activity-list_list-item flex">
                  <div className="mr-4">
                    <div className="avatar avatar-sm">
                      <span className="block w-full text-center mt-1">S</span>
                    </div>
                  </div>
                  <div className="">
                    <p className="mb-1 leading-normal">
                      <strong className="text-black text-lg font-medium">Sandra</strong>
                      <span className="text-sm text-grey-dark ml-2">2 hours ago</span>
                    </p>
                    <p className="text-black text-base leading-normal">
                      Sofia is looking with her partner Kareem
                    </p>
                  </div>
                </div>

                <div className="mb-6 activity-list_list-item flex">
                  <div className="mr-4">
                    <div className="avatar avatar-sm">
                      <span className="block w-full text-center mt-1">S</span>
                    </div>
                  </div>
                  <div className="">
                    <p className="mb-1 leading-normal">
                      <strong className="text-black text-lg font-medium">Sandra</strong>
                      <span className="text-sm text-grey-dark ml-2">4 hours ago</span>
                    </p>
                    <p className="text-black text-base leading-normal">
                      I sent her some properties to view. She will let me know which ones she is interested in.
                    </p>
                  </div>
                </div>

                <div className="mb-6 activity-list_list-item flex">
                  <div className="mr-4">
                    <div className="avatar avatar-sm">
                      <span className="block w-full text-center mt-1">S</span>
                    </div>
                  </div>
                  <div className="">
                    <p className="mb-1 leading-normal">
                      <strong className="text-black text-lg font-medium">Sandra</strong>
                      <span className="text-sm text-grey-dark ml-2">Dec 11, 2018 at 4:32 PM</span>
                    </p>
                    <p className="text-black text-base leading-normal">
                      Talked with Sofia this morning. Planning to meet next Tuesday.
                    </p>
                  </div>
                </div>


                <div className="mb-6 activity-list_list-item flex">
                  <div className="mr-4">
                    <div className="avatar avatar-sm">
                      <img src={logoBlueCircle} className="w-8 no-stretch" alt="OJO Logo" />
                    </div>
                  </div>
                  <div className="">
                    <p className="mb-1 leading-normal">
                      <strong className="text-black text-lg font-medium">OJO</strong>
                      <span className="text-sm text-grey-dark ml-2">Dec 1, 2018 at 2:15 PM</span>
                    </p>
                    <p className="text-black text-base leading-normal">
                      Sofia would like to speak about a home purchase.<br />
                      Best time to contact: Evening (6-9 pm)<br />
                      Area: Hyde Park, Central East Side, Southeast Austin<br />
                      First Time Buyer: Y<br />
                      Property Inquired:<br />
                      1158 Ridgeway Dr #A<br />
                      Austin, TX 78702
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="fixed pin-b actions">
              <div className="container flex items-center px-6 mx-auto max-w-lg">
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
