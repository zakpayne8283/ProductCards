import React from "react";

import "./Card.css";

export class Card extends React.Component {
  render() {
    if (this.props.cardData === "skeleton") {
      return (
        <div
          className="card"
          onClick={() => this.props.clickHandler(this.props.cardData)}
        >
          <div className="skeleton skeleton-image" />
          <p className="skeleton skeleton-paragraph" />
        </div>
      );
    }
    const { url, title } = this.props.cardData;

    return (
      <div
        className="card"
        onClick={() => this.props.clickHandler(this.props.cardData)}
      >
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    );
  }
}
