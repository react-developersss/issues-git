import React, { Component } from "react";

import "./button.scss";

class Button extends Component {
  render() {
    return (
      <div className="buttons">
        <button className="all">All</button>
        <button className="finish">Finished</button>
        <button className="no-finish">No Finished</button>
      </div>
    );
  }
}

export default Button;
