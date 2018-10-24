import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import Input from "./components/Input";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <Input />
        </div>
      </div>
    );
  }
}

export default App;
