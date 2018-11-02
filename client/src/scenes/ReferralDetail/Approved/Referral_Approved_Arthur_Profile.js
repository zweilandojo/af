import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import iconChatWhite from '../../../assets/images/icon-chat-w.png';
import iconPhoneWhite from '../../../assets/images/icon-phone-w.png';
import iconEmailWhite from '../../../assets/images/icon-email-w.png';
import iconChevronLeftWhite from '../../../assets/images/icon-chevron-left-w.png';
import iconNote from '../../../assets/images/icons/icon-note.png';

// Components
import HomeListItem from '../../../components/HomeListItem/index.js';

class ReferralProfile extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
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
    return (
      <div className="app">
        <div className="review-status-wrapper review-status_approved">
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
              <div className="tab active">
                <Link to="/referral-approved-arthur-profile">
                  Profile
                </Link>
              </div>
              <div className="tab">
                <Link to="/referral-approved-arthur-review">
                  Review
                </Link>
              </div>
            </div>
          </nav>

      </div>

        <main className="container mx-auto px-2 pb-24 max-w-lg">
          <section className="pb-6 mb-6 mt-8">
              <header className="mb-4">
                <h3 className="ml-6 text-2xl">
                  About
                </h3>
              </header>
              <div className="border border-grey-light p-8 rounded-lg">
                <ul className="text-base leading-normal list-reset">
                  <li className="border-b border-grey-light flex pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Phone
                    </div>
                    <div className="w-1/2">
                      (555) 512-1234
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Lives
                    </div>
                    <div className="w-1/2">
                      Cedar Park, TX
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Desired Location
                    </div>
                    <div className="w-1/2">
                      Hyde Park, Central Austin
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Budget
                    </div>
                    <div className="w-1/2">
                      $250 - $450k
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Property Type
                    </div>
                    <div className="w-1/2">
                      Homes, Townhomes
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Bed
                    </div>
                    <div className="w-1/2">
                      3+
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Bath
                    </div>
                    <div className="w-1/2">
                      2+
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Financing
                    </div>
                    <div className="w-1/2">
                      Has a lender
                    </div>
                  </li>
                  <li className="border-b border-grey-light flex pt-3 pb-2">
                    <div className="w-1/2 text-grey-dark">
                      Timeline
                    </div>
                    <div className="w-1/2">
                      Less than 6 months
                    </div>
                  </li>
                  <li className="flex pt-3">
                    <div className="w-1/2 text-grey-dark">
                      Lead Source
                    </div>
                    <div className="w-1/2">
                      Facebook
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            <section className="pb-6 mb-6">
              <header className="mb-4">
                <h3 className="mb-4 ml-6 text-2xl">
                  OJO handoff notes
                </h3>
              </header>
              <div className="border border-grey-light p-8 rounded-lg">
                <p className="text-grey-dark text-base mb-8">
                  Last updated Nov 1, 2018 2:15 PM
                </p>
                <p className="text-black text-base leading-normal">
                  Arthur would like to speak about a home purchase.<br/>
                  Best time to contact: Evening (6-9 pm)<br/>
                  Area: Hyde Park, East Side<br/>
                  First Time Buyer: Y<br/>
                  Property Inquired:<br/>
                  200 Bullock Dr.<br/>
                  Austin, TX 78774
                </p>
              </div>
            </section>

            {/* BEGIN NOTE HISTORY */}
            <section className="pb-6 mb-6">
              <header className="mb-4">
                <h3 className="mb-4 ml-6 text-2xl">
                  Agent notes
                </h3>
              </header>
              <div className="border border-grey-light p-8 rounded-lg">
                <p className="text-grey-dark text-base mb-8">
                  Things you want to remember about Arthur
                </p>
                <div className="referral-notes">
                  <div className="referral-notes_list leading-normal">
                  {/*
                    <div className="referral-notes_list_item flex py-4 border-b border-color-light">
                      <div className="referral-notes_list_icon flex-initial mr-4">
                        <img src={iconNote} className="w-8" alt="" />
                      </div>
                      <div className="referral-notes_list_item_content">
                        <p className="w-full text-black text-base">
                          Met Arthur. He’s going on vacation next week. Setting up MLS for him tonight.
                        </p>
                        <span className="w-full text-sm text-grey-dark">
                          Nov 4, 2018 10:45 AM
                        </span>
                      </div>
                    </div>
                    */}
                    <div className="referral-notes_list_item flex py-4 border-b border-color-light">
                      <div className="referral-notes_list_icon flex-initial mr-4">
                        <img src={iconNote} className="w-8" alt="" />
                      </div>
                      <div className="referral-notes_list_item_content">
                        <p className="w-full text-black text-base">
                          Arthur is searching with his wife
                        </p>
                        <span className="w-full text-sm text-grey-dark">
                          Nov 1, 2018 11:00 AM
                        </span>
                      </div>
                    </div>
                    <div>
                    <Link to="/referral-approved-arthur-review#referral-form-notes" className="block pt-4 text-grey">
                      + NEW
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* END NOTE HISTORY */}

            <section className="pb-6 mb-6">
              <header className="mb-4">
                <h3 className="mb-4 ml-6 text-2xl">
                  Arthur’s favorites
                </h3>
              </header>
              <div className="border border-grey-light p-8 rounded-lg">
                <p className="text-grey-dark text-base mb-8">
                  A few homes Arthur really likes
                </p>
                <div className="home-list flex flex-wrap -mx-2">
                  <HomeListItem
                    homeUrl="https://consumer.agent.ojo.me/listings/fa6010b1f2e6d48ed1e8fc323e00c60f"
                    imgUrl="http://tx-actris.photos.mlsfinder.com/photos/1/1/9/7/8/5/8/1197858-1.jpg"
                    address="10316 Yellowstone Dr"
                    price="329,900"
                    neighborhood="Southeast Austin"
                    cityStateZip="Austin, TX 78747"
                    bed="3"
                    bath="2"
                    sqft="1609"
                  />
                  <HomeListItem
                    homeUrl="https://consumer.agent.ojo.me/homefit/area/0f151ae15cf6c1050d97e3f479c3ab00"
                    imgUrl="http://tx-actris.photos.mlsfinder.com/photos/7/0/9/9/6/6/0/7099660-1.jpg"
                    address="1106 Olive St"
                    price="565,000"
                    neighborhood="Central East Austin"
                    cityStateZip="Austin, TX 78702"
                    bed="3"
                    bath="2"
                    sqft="1373"
                  />
                  <HomeListItem
                    homeUrl="https://consumer.agent.ojo.me/listings/52a7bb17e365c3e95cfeb70521721400"
                    imgUrl="http://tx-actris.photos.mlsfinder.com/photos/9/1/7/1/8/3/9/9171839-1.jpg"
                    address="1600 Haskell St"
                    price="685,000"
                    neighborhood="Central East Austin"
                    cityStateZip="Austin, TX 78702"
                    bed="4"
                    bath="2.5"
                    sqft="1,971"
                  />
                </div>
              </div>
            </section>
        </main>
      </div>
      )
    }
}

export default ReferralProfile;
