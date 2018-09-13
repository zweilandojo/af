import React from 'react';

class Milestones extends React.Component {
  render() {
    return (
      <div className="milestone-count mb-16">
        <h3 className="mb-4 ml-6 text-2xl">
          Milestones
        </h3>
        <div className="border border-grey-light p-8 rounded-lg">
          <p className="text-gray-dark text-base mb-6">
            An overview of your referral progress
          </p>
          <div className="flex py-4">
            <div className="text-lg bg-gray-light rounded-full h-16 w-16 text-center mr-4">
              <span className="inline-block mt-6">{this.props.talk}%</span>
            </div>
            <div className="flex-1">
              <h4 className="w-16 mb-2 pr-2 uppercase font-lg">Talk</h4>
              <p className="text-gray-dark font-normal text-sm">Have you made first contact?</p>
            </div>
          </div>
          <div className="flex py-4">
            <div className="text-lg bg-gray-light rounded-full h-16 w-16 text-center mr-4">
              <span className="inline-block mt-6">{this.props.set}%</span>
            </div>
            <div className="flex-1">
              <h4 className="w-16 mb-2 pr-2 uppercase font-lg">Set</h4>
              <p className="text-gray-dark font-normal text-sm">Have you scheduled a time to meet in-person?</p>
            </div>
          </div>
          <div className="flex py-4">
            <div className="text-lg bg-gray-light rounded-full h-16 w-16 text-center mr-4">
              <span className="inline-block mt-6">{this.props.met}%</span>
            </div>
            <div className="flex-1">
              <h4 className="w-16 mb-2 pr-2 uppercase font-lg">Met</h4>
              <p className="text-gray-dark font-normal text-sm">Did you meet the referral in-person?</p>
            </div>
          </div>

          <div className="flex py-4">
            <div className="text-lg bg-gray-light rounded-full h-16 w-16 text-center mr-4">
              <span className="inline-block mt-6">{this.props.offer}%</span>
            </div>
            <div className="flex-1">
              <h4 className="w-16 mb-2 pr-2 uppercase font-lg">Offer</h4>
              <p className="text-gray-dark font-normal text-sm">Has your client made an offer on a home yet?</p>
            </div>
          </div>
          <div className="flex py-4">
            <div className="text-lg bg-gray-light rounded-full h-16 w-16 text-center mr-4">
              <span className="inline-block mt-6">{this.props.accept}%</span>
            </div>
            <div className="flex-1">
              <h4 className="w-16 mb-2 pr-2 uppercase font-lg">Accept</h4>
              <p className="text-gray-dark font-normal text-sm">Has the seller accepted your client’s offer?</p>
            </div>
          </div>
          <div className="flex py-4">
            <div className="text-lg bg-gray-light rounded-full h-16 w-16 text-center mr-4">
              <span className="inline-block mt-6">{this.props.transact}%</span>
            </div>
            <div className="flex-1">
              <h4 className="w-16 mb-2 pr-2 uppercase font-lg">Transact</h4>
              <p className="text-gray-dark font-normal text-sm">Has your client closed on a home?</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Milestones;
