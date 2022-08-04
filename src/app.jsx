import React, { Component } from "react";
import Issues from "./components/issues";
import { getIssues } from "./utils/get-users";
import "./base.scss";

class App extends Component {
  state = {
    data: getIssues(40),
    issues: [],
  };

  componentDidMount() {
    this.setState({ issues: this.state.data });
  }

  handleAll = () => {
    this.setState({ issues: this.state.data });
  };

  handleFinished = () => {
    const finished = this.state.data.filter(
      (issue) => issue.isFinished === true
    );
    this.setState({ issues: finished });
  };

  handleNoFinished = () => {
    const noFinished = this.state.data.filter(
      (issue) => issue.isFinished === false
    );
    this.setState({ issues: noFinished });
  };

  render() {
    return (
      <div className="container">
        <Issues
          onFinished={this.handleFinished}
          onNoFinished={this.handleNoFinished}
          onAll={this.handleAll}
          issues={this.state.issues}
        />
      </div>
      
    );
  }
}

export default App;
