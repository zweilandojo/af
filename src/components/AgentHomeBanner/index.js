import React from 'react';

import weatherPartlySunny from '../../assets/images/weather/partly-sunny.svg';

function Greeting(props) {
  const today = new Date();
  const curHr = today.getHours();
  if (curHr < 12) {
    return 'Morning';
  } else if (curHr < 18) {
    return 'Afternoon';
  } else {
    return 'Evening';
  }
}

class AgentHomeBanner extends React.Component {
  render() {
    return (
      <div className="text-center pt-16 pb-10 mb-8">
        <h2 className="mb-2 text-3xl"><Greeting />, Matt!</h2>
        <p className="text-gray-dark text-base flex items-start justify-center">
          <img src={weatherPartlySunny} className="mr-2" alt="Partly Sunny" />
          <span className="inline-block">Mostly Sunny 90° F</span>
        </p>
      </div>
    )
  }
}

export default AgentHomeBanner;
