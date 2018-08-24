import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["task1", "task2", "task3"]
    // imageUrl: "https://picsum.photos/200"
  };

  style = {
    fontSize: 50,
    fontWeight: "bold"
  };

  render() {
    // let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        {/* _____^ You can write any js expression meaning anything that produces a value */}
        <button
          style={{ height: 50 }}
          type="button"
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    //^append
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
