import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    let opacityStyle = {
      opacity: this.props.opacity
    };

    if (this.props.opacity >= .2)   
      return (
        <div className="color-box" style={opacityStyle}>
          <ColorBox opacity={this.props.opacity-0.1} />
        </div>
      );
    else
      return null;
  }
  
}
