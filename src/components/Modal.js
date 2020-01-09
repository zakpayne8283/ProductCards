import React from "react";

import "./Modal.css";

export class Modal extends React.Component {
  render() {
    const { url, title } = this.props.cardData;

    // This is because the colors from the default API sucks.
    const certainColorURL = "https://via.placeholder.com/600/66b7d2";

    return (
      <div className="modal" onClick={this.props.handleClick}>
        <img alt="Modal Pic" src={certainColorURL} />
        <p>{title}</p>
      </div>
    );
  }
}
