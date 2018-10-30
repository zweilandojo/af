import React from 'react';

class HomeListItem extends React.Component {
  render() {
    return (
      <div className="w-full md:w-1/2 leading-normal mb-8 px-2">
        <div className="bg-grey w-full mb-2"> {/* 1280x794 */}
          <img src={this.props.imgUrl} height="218" alt="home" className="block" />
        </div>
        <h4 className="text-lg font-bold">
          <span className="mr-2">{this.props.address}</span>
          <span className="text-green">${this.props.price}</span>
        </h4>
        <p className="text-base">
          {this.props.neighborhood} - {this.props.cityStateZip}
        </p>
        <div className="text-base text-grey mb-1">
          <span className="mr-2">{this.props.bed}bd</span>
          <span className="mr-2">{this.props.bath}ba</span>
          {this.props.sqft}sf
        </div>
      </div>
    )
  }
}

export default HomeListItem;
