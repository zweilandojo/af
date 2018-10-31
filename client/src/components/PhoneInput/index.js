import React from 'react';
import InputMask from 'react-input-mask';

class PhoneInput extends React.Component {
  render() {
    return <InputMask {...this.props} mask="+1\ (999) 999-9999" maskChar=" " />;
  }
}
export default PhoneInput;
