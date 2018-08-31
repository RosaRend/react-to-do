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

  constructor() {
    super();
    //Needs to be b4 any statement when implementing a constructor for a React.Comp subclass
    this.handleIncrement = this.handleIncrement.bind(this);
    //_________________________________________^remember functions are objects so methods and properties are a yes
    //_________________________________________^.bind() new function "this" given a new value
    //this is now the counter object
  }

  handleIncrement(product) {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
    //updating the state of what is being set
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
        <span style={this.style} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        {/* _____^ You can write any js expression meaning anything that produces a value */}
        <button
          onClick={() => this.handleIncrement({ product })}
          style={{ height: 30 }}
          type="button"
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <div>
          {this.state.tags.length === 0 && "Don't forget to set a task!"}
          {/* how to render under certian conditions */}
          {this.renderTags()}
        </div>
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
