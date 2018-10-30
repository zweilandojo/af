import React, { Component } from 'react';
// import MaskedInput from 'react-text-mask';

class SMSForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: {
        to: '',
        body: 'Your Ojo authentication code is 123-456'
      },
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
  onSubmit(event) {
    event.preventDefault();
    this.setState({ submitting: true });
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
    return (
      <form
        onSubmit={this.onSubmit}
        className={this.state.error ? 'error sms-form' : 'sms-form'}
      >
        <div>
          <input
             type="tel"
             className="input mb-4 text-center text-lg"
             placeholder="Phone"
             name="to"
             id="to"
             value={this.state.message.to}
             onChange={this.onHandleChange}
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
        */}
        <button
          type="submit"
          disabled={this.state.submitting}
          className="text-xl block bg-white w-full h-16 text-blue py-2 px-4 rounded flex items-center justify-center"
        >
          Next
        </button>
      </form>
    );
  }
}

export default SMSForm;
