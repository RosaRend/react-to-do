import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  sate = {};

  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Counters;
