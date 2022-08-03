import React, { Component } from "react";
import "./button.scss";

class Button extends Component {
  render() {
    const { onFinished, onNoFinished, onAll } = this.props;
    return (
      <div className="buttons">
        <button className="all" onClick={() => onAll()}>
          All
        </button>
        <button className="finish" onClick={() => onFinished()}>
          Finished
        </button>
        <button className="no-finish" onClick={() => onNoFinished()}>
          No Finished
        </button>
      </div>
    );
  }
}

export default Button;
