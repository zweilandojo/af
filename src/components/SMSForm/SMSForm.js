import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import MaskedInput from 'react-text-mask';

class SMSForm extends Component {
  constructor(props) {
    super(props);

    var x = Math.floor((Math.random() * 9) + 1);
    var x2 = Math.floor((Math.random() * 9) + 1);
    var x3 = Math.floor((Math.random() * 9) + 1);
    var x4 = Math.floor((Math.random() * 9) + 1);

    this.state = {
      message: {
        to: '',
        body: 'Your Ojo authentication code is ' + x + x2 + x3 + '-' + x4 + x + x2
      },
      redirectToReferrer: false,
      submitting: false,
      error: false
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onHandleChange(event) {
    const name = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    })
  }
  onSubmit(e) {
    e.preventDefault();
    this.setState({
      submitting: true
    });

    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          this.setState({
            error: false,
            submitting: false,
            redirectToReferrer: true,
            message: {
              to: '',
              body: ''
            }
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  }
  render() {
    const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/signin-verify" />
        }

    return (
      <form
        onSubmit={this.onSubmit}
        className={this.state.error ? 'error sms-form' : 'sms-form'}
      >
        <div>

          <MaskedInput
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            type="tel"
            name="to"
            className="input mb-4 text-center text-lg"
            placeholder="Phone"
            guide={false}
            id="to"
            value={this.state.message.to}
            onChange={this.onHandleChange}
            onBlur={() => {}}
          />

        </div>
        {/*
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            name="body"
            id="body"
            value={this.state.message.body}
            onChange={this.onHandleChange}
          />
        </div>

          <button
            type="submit"
            disabled={this.state.submitting}
            className="text-xl block bg-white w-full h-16 text-blue py-2 px-4 rounded flex items-center justify-center"
          >
            Next
          </button>
          */}

            <Link
              to="signin-verify"
              className="text-xl block bg-white w-full h-16 text-blue py-2 px-4 rounded flex items-center justify-center"
            >
              Next
            </Link>
        </form>
    );
  }
}

export default SMSForm;
