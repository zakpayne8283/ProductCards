import React from "react";

import "./Modal.css";

export class Modal extends React.Component {
  render() {
    const { url, title } = this.props.cardData;

    return (
      <div className="modal" onClick={this.props.handleClick}>
        <img alt="Modal Pic" src={url} />
        <p>{title}</p>
      </div>
    );
  }
}
