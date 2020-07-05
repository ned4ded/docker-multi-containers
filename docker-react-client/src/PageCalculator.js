import React, { Component } from "react";
import axios from "axios";

export default class PageCalculator extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: "",
  };

  componentDidMount() {
    this.fetchValues();
    this.fetchIndexes();
  }

  async fetchValues() {
    const values = await axios.get("/api/values/current");

    this.setState({ values: values.data });
  }

  async fetchIndexes() {
    const indexes = await axios.get("/api/values/all");

    this.setState({
      seenIndexes: indexes.data,
    });
  }

  renderSeenIndexes() {
    return this.state.seenIndexes.map(({ number }) => number).join(", ");
  }

  renderCalculatedValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }

    return entries;
  }

  handleSubmit = async (ev) => {
    ev.preventDefault();

    await axios.post("/api/values", {
      index: this.state.index,
    });

    this.setState({ index: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index:</label>
          <input
            type="text"
            value={this.state.index}
            onChange={(e) => this.setState({ index: e.target.value })}
          />
          <button>Submit</button>
        </form>

        <h2>Indexes I have seen: </h2>
        {this.renderSeenIndexes()}

        <h2>Calculated values: </h2>
        {this.renderCalculatedValues()}
      </div>
    );
  }
}
