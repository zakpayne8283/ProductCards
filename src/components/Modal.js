import React from "react";

export class Modal extends React.Component {
  render() {
    return (
      <div
        className="modal"
        style={{
          backgroundColor: "white",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
        onClick={this.props.handleClick}
      >
        <img
          alt="Modal Pic"
          src={this.props.cardData.url}
          style={{ maxHeight: 200 }}
        />
        <p>{this.props.cardData.title}</p>
      </div>
    );
  }
}
