import React, { Component } from "react";
import './id.scss';

class Id extends Component {
  render() {
    const { issue } = this.props;
    return <p>{issue.id}</p>;
  }
}

export default Id;
