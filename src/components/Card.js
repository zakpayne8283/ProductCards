import React from "react";

import "./Card.css";

export class Card extends React.Component {
  render() {
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
