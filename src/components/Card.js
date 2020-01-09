import React from "react";

import "./Card.css";

export class Card extends React.Component {
  render() {
    if (this.props.cardData === "skeleton") {
      return (
        <div className="card skeleton-card">
          <div className="skeleton skeleton-image" />
          <p className="skeleton skeleton-paragraph" />
        </div>
      );
    }
    const { url, title } = this.props.cardData;

    // This is because the colors from the default API sucks.
    const certainColorURL = "https://via.placeholder.com/600/66b7d2";

    return (
      <div
        className="card"
        onClick={() => this.props.clickHandler(this.props.cardData)}
      >
        <img src={certainColorURL} alt={title} />
        <p>{title}</p>
      </div>
    );
  }
}
