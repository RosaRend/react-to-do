import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
    // imageUrl: "https://picsum.photos/200"
  };

  style = {
    fontSize: 50,
    fontWeight: "bold"
  };

  render() {
    const classes = ""
    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.style} className="badge badge-warning m-2">
          {this.formatCount()}
        </span>
        {/* _____^ You can write any js expression meaning anything that produces a value */}
        <button type="button" className="btn btn-secondary btn-sm">
          Increment
        </button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
