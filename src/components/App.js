import React from "react";

import axios from "axios";
import debounce from "lodash.debounce";

import { Card } from "./Card";
import { Modal } from "./Modal";

import "./App.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      cardsShown: 9,
      modalCard: false,
      loaded: false
    };

    // Bindings
    this.handleClick = this.handleClick.bind(this);
    this.removeModal = this.removeModal.bind(this);

    // Handle the infinite scroll
    window.onscroll = debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        this.setState({
          cardsShown: this.state.cardsShown + 3
        });
      }
    }, 100);
  }

  componentDidMount() {
    // Set how much time for shimmer effect.
    this.timer = setInterval(
      () =>
        axios.get("https://jsonplaceholder.typicode.com/photos").then(res => {
          const cardsData = res.data;
          this.setState({ cards: cardsData, loaded: true });
        }),
      5000
    );
  }

  handleClick(cardData) {
    this.setState({ modalCard: cardData });
  }

  removeModal() {
    this.setState({ modalCard: false });
  }

  render() {
    const { modalCard, cardsShown, cards, loaded } = this.state;

    return (
      // <div className="app">
      <div className={["app", modalCard ? "modal-out" : ""].join(" ")}>
        <div className="overlay" />
        {modalCard ? (
          <Modal cardData={modalCard} handleClick={this.removeModal} />
        ) : (
          ""
        )}
        <h1>Product Cards</h1>
        <h2>Now with infinite scroll!</h2>
        <div className="cards-container">
          {cards.slice(0, cardsShown).map((card, index) => (
            <Card key={index} cardData={card} clickHandler={this.handleClick} />
          ))}
          {loaded
            ? ""
            : [...Array(cardsShown)].map(index => (
                <Card key={index} cardData={"skeleton"} />
              ))}
        </div>
      </div>
    );
  }
}
