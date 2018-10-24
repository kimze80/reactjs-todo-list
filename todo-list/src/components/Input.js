import React, { Component } from "react";
import "./Input.css";

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      list: []
    };
  }

  handleChange(input) {
    this.setState({
      userInput: input
    });
  }

  addToList(input) {
    let listArray = this.state.list;
    listArray.push(input);
    this.setState({
      list: listArray,
      userInput: ""
    });
  }

  render() {
    return (
      <div className="list-main">
        <input
          type="text"
          value={this.state.userInput}
          onChange={e => this.handleChange(e.target.value)}
        />
        <button onClick={() => this.addToList(this.state.userInput)}>
          Submit
        </button>
        <ul>
          {this.state.list.map(val => (
            <li>{val}</li>
          ))}
        </ul>
      </div>
    );
  }
}
