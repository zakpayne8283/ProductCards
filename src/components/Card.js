import React from "react";

export class Card extends React.Component {
  render() {
    return (
      <div
        className="card"
        style={{ flexBasis: "31%" }}
        onClick={() => this.props.clickHandler(this.props.cardData)}
      >
        {/* {JSON.stringify(this.props)} */}
        <img
          style={{ maxWidth: "100%" }}
          src={this.props.cardData.url}
          alt={this.props.cardData.title}
        />
        <p>{this.props.cardData.title}</p>
      </div>
    );
  }
}
