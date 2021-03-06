import React from 'react'
import { Link } from 'react-router-dom';

// Assets
import iconCloseBlue from '../../../assets/images/icons/icon-close-blue.png';
import imgReleaseReferral from '../../../assets/images/illustrations/release-referral.png';

// Components

class Modal_Release_Referral extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked || false,
      isOtherTextareaShown: props.isOtherTextareaShown || false,
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleOtherTextareaToggle = this.handleOtherTextareaToggle.bind(this)
  }
  handleChange() {
    this.setState({ isChecked: !this.state.isChecked })
  }
  handleOtherTextareaToggle() {

    // Toggles visiblity of Note History (i.e. Activity List)
    const otherTextareaContainer = document.getElementById('otherTextareaContainer')

    this.setState({ isOtherTextareaShown: !this.state.isOtherTextareaShown })

    console.log(this);
    if(this.state.isOtherTextareaShown === false) {
      otherTextareaContainer.classList.remove("hidden")
    } else {
      otherTextareaContainer.classList.add("hidden")
    }
  }
  render() {
    return (
      <div className="app">
        <header className="app-header fixed pin-t w-full bg-white flex">
          <div className="w-1/4 app-header-back-button">
            <Link to="/referral-needsReview-review" className="block">
              <img src={iconCloseBlue} className="icon icon-close-blue w-4 mr-1 float-left" alt="close modal" />
            </Link>
          </div>
          <div className="w-1/2 text-center">
            <h6 className="text-base font-semibold py-6 text-lg leading-tight">
              Release Referral
            </h6>
          </div>
        </header>

        <div className="container mx-auto px-6 mt-24">
          <div className="max-w-sm mx-auto">
            <p className="leading-normal text-sm text-grey-dark mb-8">
              <strong className="font-medium text-black">Sofia Perez</strong> not working out? Release them so they&#39;re no longer assigned to you. Dead is now Release.
            </p>
            <h4 className="text-base mb-6">What was the issue?</h4>
            <ul className="list-reset block pb-6">
              <li className="btn-stroked mr-1 mb-3 w-full">
                <label className="w-full text-center">
                  <input
                    type="checkbox"
                    className="checkbox float-left"
                    value={this.state.isChecked}
                    onChange={this.handleChange}
                  />
                  <span className="slider"></span>
                  <span className="text">Unresponsive</span>
                </label>
              </li>
              <li className="btn-stroked mr-1 mb-3 w-full">
                <label className="w-full text-center">
                  <input
                    type="checkbox"
                    className="checkbox float-left"
                    value={this.state.isChecked}
                    onChange={this.handleChange}
                  />
                  <span className="slider"></span>
                  <span className="text">Already has an agent</span>
                </label>
              </li>
              <li className="btn-stroked mr-1 mb-3 w-full">
                <label className="w-full text-center">
                  <input
                    type="checkbox"
                    className="checkbox float-left"
                    value={this.state.isChecked}
                    onChange={this.handleChange}
                  />
                  <span className="slider"></span>
                  <span className="text">Poor credit</span>
                </label>
              </li>
              <li className="btn-stroked mr-1 mb-3 w-full">
                <label className="w-full text-center">
                  <input
                    type="checkbox"
                    className="checkbox float-left"
                    value={this.state.isChecked}
                    onChange={this.handleChange}
                  />
                  <span className="slider"></span>
                  <span className="text">Outside my area</span>
                </label>
              </li>
              <li className="btn-stroked mr-1 mb-3 w-full">
                <label className="w-full text-center">
                  <input
                    type="checkbox"
                    className="checkbox float-left"
                    value={this.state.isChecked}
                    onChange={this.handleChange}
                  />
                  <span className="slider"></span>
                  <span className="text">No longer looking</span>
                </label>
              </li>
              <li className="btn-stroked mr-1 mb-3 w-full">
                <label className="w-full text-center">
                  <input
                    type="checkbox"
                    className="checkbox float-left"
                    value={this.state.isChecked}
                    onChange={this.handleChange}
                    onClick={this.handleOtherTextareaToggle}
                  />
                  <span className="slider"></span>
                  <span className="text">Other</span>
                </label>
                <div className="mt-4 hidden" id="otherTextareaContainer">
                  <textarea className="input textarea" placeholder="What was the reason?">
                  </textarea>
                </div>
              </li>
            </ul>
            {/*
            <div className="text-center mb-24">
              <img src={imgReleaseReferral} className="h-32" alt="release" />
            </div> */}
          </div>
        </div>

        <section className="fixed pin-b actions">
          <div className="container flex items-center mx-auto max-w-sm">
            <Link to="/home-approved-arthur" className="btn btn-red block text-center text-lg">Release</Link>
          </div>
        </section>
      </div>
    )
  }
}
export default Modal_Release_Referral;
