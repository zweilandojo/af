import React from 'react';

class Milestones extends React.Component {
  render() {
    return (
      <div className="milestone-count mb-12">
        <h3 className="mb-4 ml-6 text-2xl">
          Your Stats
        </h3>
        <div className="border border-grey-light p-8 rounded-lg">
          <p className="text-grey-dark text-base mb-6">
            An overview of your progress
          </p>

          <div className="flex justify-between flex-wrap">
            <div className="py-4 text-center">
              <div className="text-2xl bg-grey-lightest rounded-full h-16 w-16 text-center mr-4">
                <span className="inline-block mt-5">{this.props.talk}</span>
              </div>
              <div className="mt-4">
                <h4 className="w-16 mb-2 font-lg">Connected</h4>
                {/* <p className="text-grey-dark font-normal text-sm">Have you made first contact?</p> */}
              </div>
            </div>
            <div className="py-4 text-center">
              <div className="text-2xl bg-grey-lightest rounded-full h-16 w-16 text-center mr-4">
                <span className="inline-block mt-5">{this.props.set}</span>
              </div>
              <div className="mt-4">
                <h4 className="w-16 mb-2 font-lg">Met</h4>
                {/* <p className="text-grey-dark font-normal text-sm">Have you scheduled a time to meet in-person?</p> */}
              </div>
            </div>
            <div className="py-4 text-center">
              <div className="text-2xl bg-grey-lightest rounded-full h-16 w-16 text-center mr-4">
                <span className="inline-block mt-5">{this.props.met}</span>
              </div>
              <div className="mt-4">
                <h4 className="w-16 mb-2 font-lg">Showing</h4>
                {/* <p className="text-grey-dark font-normal text-sm">Did you meet the referral in-person?</p> */}
              </div>
            </div>
            <div className="py-4 text-center">
              <div className="text-2xl bg-grey-lightest rounded-full h-16 w-16 text-center mr-4">
                <span className="inline-block mt-5">{this.props.offer}</span>
              </div>
              <div className="mt-4">
                <h4 className="w-16 mb-2 font-lg">Offer</h4>
                {/* <p className="text-grey-dark font-normal text-sm">Has your client made an offer on a home yet?</p> */}
              </div>
            </div>
            <div className="py-4 text-center">
              <div className="text-2xl bg-grey-lightest rounded-full h-16 w-16 text-center mr-4">
                <span className="inline-block mt-5">{this.props.accept}</span>
              </div>
              <div className="mt-4">
                <h4 className="w-16 mb-2 font-lg">Accepted</h4>
                {/* <p className="text-grey-dark font-normal text-sm">Has the seller accepted your client’s offer?</p> */}
              </div>
            </div>
            <div className="py-4 text-center">
              <div className="text-2xl bg-grey-lightest rounded-full h-16 w-16 text-center mr-4">
                <span className="inline-block mt-5">{this.props.transact}</span>
              </div>
              <div className="mt-4">
                <h4 className="w-16 mb-2 font-lg">Closed</h4>
                {/* <p className="text-grey-dark font-normal text-sm">Has your client closed on a home?</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Milestones;
