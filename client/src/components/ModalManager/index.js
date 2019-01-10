import React from 'react';
import { Link } from 'react-router-dom'

// Assets
// import iconClose from '../../assets/images/icon-close.png';
import iconReleaseNotes from '../../assets/images/new-release-icons/icon-notes.png';
import iconReleaseBinoculars from '../../assets/images/new-release-icons/icon-binoculars.png';
import iconReleaseBird from '../../assets/images/new-release-icons/icon-bird.png';
import iconReleaseCommPre from '../../assets/images/new-release-icons/icon-responsive-finance.png';
import iconReleaseMilestones from '../../assets/images/new-release-icons/icon-milestones.png';

class ModalManager extends React.Component {
  render() {
    return (
      <div className="modal-manager">
        <div className="modal-overlay show"></div>
        <div className="modal-scroller fade-in show actionable">
          <div className="modal-window flex-container flex-v small">
            <div className="modal-window-content content">

              <header className="m-8">
                <h2 className="text-3xl font-medium leading-normal">What’s new?</h2>
                <p className="text-grey-dark text-sm leading-normal">
                  We’ve improved the place since you were last here. Take a look.
                </p>
              </header>

              <main className="mx-8">
                <div className="flex mb-8">
                  <div className="w-16 h-16 mb-4 flex-no-shrink bg-white border border-lightest rounded-full flex items-center justify-center">
                    <img src={iconReleaseBird} className="w-8" alt="Referral details" />
                  </div>
                  <div className="ml-4">
                    <span className="text-base font-medium leading-normal block mb-0">Release a Referral</span>
                    <span className="text-sm leading-normal text-grey-dark">Referral not working out? Release them so they&#39;re no longer assigned to you. Dead is now Release.</span>
                  </div>
                </div>

                <div className="flex mb-8">
                  <div className="w-16 h-16 mb-4 flex-no-shrink bg-white border border-lightest rounded-full flex items-center justify-center">
                    <img src={iconReleaseMilestones} className="w-6" alt="Milestones" />
                  </div>
                  <div className="ml-4">
                    <span className="text-base font-medium leading-normal block mb-0">Milestone Update</span>
                    <span className="text-sm leading-normal text-grey-dark">New Showing Homes milestone added! We also removed Set and changed Talked to Connected.</span>
                  </div>
                </div>

                <div className="flex mb-8">
                  <div className="w-16 h-16 mb-4 flex-no-shrink bg-white border border-lightest rounded-full flex items-center justify-center">
                    <img src={iconReleaseCommPre} className="w-8" alt="Communication Pre-Approval" />
                  </div>
                  <div className="ml-4">
                    <span className="text-base font-medium leading-normal block mb-0">Communication + Pre-Approval</span>
                    <span className="text-sm leading-normal text-grey-dark">Is your referral responsive? Financially prepared? Track it here.</span>
                  </div>
                </div>

                {/*
                <div className="flex mb-8">
                  <div className="w-16 h-16 mb-8 flex-no-shrink bg-white border border-lightest rounded-full flex items-center justify-center">
                    <img src={iconReleaseNotes} className="w-5" alt="Note history" />
                  </div>
                  <div className="ml-4">
                    <span className="text-base font-medium leading-normal block mb-0">Note History</span>
                    <span className="text-sm leading-normal text-grey-dark">View a timeline of your notes.</span>
                  </div>
                </div>

                <div className="flex mb-8">
                  <div className="w-16 h-16 mb-4 flex-no-shrink bg-white border border-lightest rounded-full flex items-center justify-center">
                    <img src={iconReleaseBinoculars} className="w-8" alt="Referral details" />
                  </div>
                  <div className="ml-4">
                    <span className="text-base font-medium leading-normal block mb-0">Referral details</span>
                    <span className="text-sm leading-normal text-grey-dark">View your OJO referral’s preferences, favorite homes, and more.</span>
                  </div>
                </div>
                */}
              </main>

              <section className="absolute pin-b actions">
                <div className="container flex items-center px-6 mx-auto max-w-lg">
                  <Link to="/" className="btn btn-blue block text-center text-lg block w-full">
                    Continue
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ModalManager;
