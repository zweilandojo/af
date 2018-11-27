import React from 'react';
import { Link } from 'react-router-dom'

// Assets
// import iconClose from '../../assets/images/icon-close.png';
import iconReleaseNotes from '../../assets/images/new-release-icons/icon-notes.png';
import iconReleaseBinoculars from '../../assets/images/new-release-icons/icon-binoculars.png';

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
                  We’ve spruced up the place since you were last here. Take a look.
                </p>
              </header>

              <main className="mx-8">
                  <div className="flex mb-8">
                    <div className="w-16 h-16 mb-4 flex-no-shrink bg-white border border-lightest rounded-full flex items-center justify-center">
                      <img src={iconReleaseBinoculars} className="w-8" alt="Referral details" />
                    </div>
                    <div className="ml-4">
                      <span className="text-base font-medium leading-normal block mb-0">Referral details</span>
                      <span className="text-sm leading-normal text-grey-dark">View your OJO referral’s preferences, favorite homes, and more.</span>
                    </div>
                  </div>

                  <div className="flex mb-8">
                    <div className="w-16 h-16 mb-8 flex-no-shrink bg-white border border-lightest rounded-full flex items-center justify-center">
                      <img src={iconReleaseNotes} className="w-5" alt="Note history" />
                    </div>
                    <div className="ml-4">
                      <span className="text-base font-medium leading-normal block mb-0">Note history</span>
                      <span className="text-sm leading-normal text-grey-dark">Quickly recall details about your OJO referrals, on the go.</span>
                    </div>
                  </div>
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
