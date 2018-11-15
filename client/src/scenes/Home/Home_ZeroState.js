import React from 'react';
import { Link } from 'react-router-dom';

// Assets
// ...nothing yet...

// Components
import AppHeader from '../../components/AppHeader/index.js';
import AgentHomeBanner from '../../components/AgentHomeBanner/index.js';
import Milestones from '../../components/Milestones/index.js';

class Home_ZeroState extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="app">
        <AppHeader />
        <AgentHomeBanner firstName="Matt" temperature="64" />

        <main className="container mx-auto px-2 max-w-lg">

          {/* BEGIN: REFERRAL LIST ZERO STATE */}
          <div className="referral-tracking clearfix mb-12">
            <h3 className="mb-4 ml-6 text-2xl">
              Referrals
            </h3>
            <div className="border border-grey-light p-8 rounded-lg">
              <div className="clearfix">
                <p className="text-base text-grey mb-6">
                  No referrals assigned
                </p>
              </div>
              <div className="py-4 border-b border-grey-light flex">
                <div className="rounded-full flex justify-center h-10 w-10 bg-grey-light">
                  {/* Nothing here */}
                </div>
                <div className="flex-initial ml-4 ">
                  <span className="h-3 w-24 rounded-full bg-grey-light block mt-2 mb-2">
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
              <div className="py-4 border-b border-grey-light flex">
                <div className="rounded-full flex justify-center h-10 w-10 bg-grey-light">
                  {/* Nothing here */}
                </div>
                <div className="flex-initial ml-4 ">
                  <span className="h-3 w-24 rounded-full bg-grey-light block mt-2 mb-2">
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
              <div className="py-4 flex">
                <div className="rounded-full flex justify-center h-10 w-10 bg-grey-light">
                  {/* Nothing here */}
                </div>
                <div className="flex-initial ml-4">
                  <span className="h-3 w-24 rounded-full bg-grey-light block mt-2 mb-2">
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
            </div>
            {/* END: REFERRAL LIST ZERO STATE */}

          </div>

          <Milestones talk="0" set="0" met="0" offer="0" accept="0" transact="0" />

          <footer className="mb-12 flex">
            <Link to="/support" className="w-full text-center mr-4 block py-6 px-4 border border-grey-light rounded-full text-lg">
              Support
            </Link>{/*
            <Link to="/" className="w-1/2 md:w-1/2 text-center inline-block py-6 px-4 border border-grey-light rounded-full text-lg">
              Send Feedback
            </Link>*/}
          </footer>
        </main>
      </div>
    )
  }
}
export default Home_ZeroState;
