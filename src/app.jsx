import React, { Component } from "react";
import Issues from "./components/issues";
import "./base.scss";

class App extends Component {
  state = {
    isFinished: false,
  };

  render() {
    return (
      <>
        <Issues />
      </>
    );
  }
}

export default App;
