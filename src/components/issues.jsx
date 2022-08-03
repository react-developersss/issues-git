import React, { Component } from "react";
import { getIssues } from "../utils/get-users";
import Issue from "./issue";

class Issues extends Component {
  render() {
    return (
      <>
        {getIssues(30).map((issue, idx) => (
          <Issue key={idx} issue={issue} />
        ))}
      </>
    );
  }
}

export default Issues;
