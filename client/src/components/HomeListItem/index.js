import React from 'react';

class HomeListItem extends React.Component {
  render() {
    return (
      <div className="w-full md:w-1/2 leading-normal mb-8 px-2">
        <a href={this.props.homeUrl}
           target="_blank"
           rel="noopener noreferrer"
           className="home-list_img-wrap bg-grey w-full mb-2"
        >
          <img src={this.props.imgUrl} height="218" alt="home" className="block" />
        </a>
        <h4 className="text-base font-medium">
          <span className="mr-2">{this.props.address}</span>
          <span className="text-green">${this.props.price}</span>
        </h4>
        <p className="text-sm">
          {this.props.neighborhood} - {this.props.cityStateZip}
        </p>
        <div className="text-sm text-grey mb-1">
          <span className="mr-3">{this.props.bed}bd</span>
          <span className="mr-3">{this.props.bath}ba</span>
          {this.props.sqft}sf
        </div>
      </div>
    )
  }
}

export default HomeListItem;
