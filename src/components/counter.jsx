import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
    // imageUrl: "https://picsum.photos/200"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>No tasks set</p>;
    //This is how you render tags conditionally
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
        {/* Your now rendering a list of items in react */}
      </ul>
    );
  }

  style = {
    fontSize: 30,
    fontWeight: "bold"
  };

  render() {
    // let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        {/* _____^ You can write any js expression meaning anything that produces a value */}
        {/* <button
          style={{ height: 30 }}
          type="button"
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>{" "} 
        */}
        {this.state.tags.length === 0 && "Don't forget to set a task!"}
        {/* how to render under certian conditions */}
        {this.renderTags()}
      </React.Fragment>
    );
  }
  // getBadgeClasses() {
  //   let classes = "badge m-2 badge-";
  //   classes += this.state.count === 0 ? "warning" : "primary";
  //   //^append
  //   return classes;
  // }

  // formatCount() {
  //   const { count } = this.state;
  //   return count === 0 ? "Zero" : count;
  // }
}

export default Counter;
