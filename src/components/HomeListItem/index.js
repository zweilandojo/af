import React from 'react';

class HomeListItem extends React.Component {
  render() {
    return (
      <div className="w-1/2 leading-normal mb-8">
        <img src="https://placehold.it/400x300" alt="home" />
        <h4 className="text-base">$246,000</h4>
        <p className="text-xs">
          2 Bed<span className="mx-1 text-grey">|</span>
          2 Bath<span className="mx-1 text-grey">|</span>
          1030 Sq Ft
        </p>
        <div className="text-xs text-grey mb-1">
          1301 Chicon St, Austin, TX
        </div>
      </div>
    )
  }
}

export default HomeListItem;
