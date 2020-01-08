import React from "react";

import axios from "axios";

import { Card } from "./Card";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      cardsShown: 6
    };

    // Bindings
    this.loadMoreCards = this.loadMoreCards.bind(this);
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
      const cardsData = res.data;
      this.setState({ cards: cardsData });
    });
  }

  renderCards() {
    return this.state.cards
      .slice(0, this.state.cardsShown)
      .map((card, index) => <Card key={index} cardData={card} />);
  }

  loadMoreCards() {
    const cardsShown = this.state.cardsShown;

    this.setState({
      cardsShown: cardsShown + 6
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div
          className="cards-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
          }}
        >
          {this.renderCards()}
        </div>
        <button onClick={this.loadMoreCards}>Load More</button>
      </div>
    );
  }
}
