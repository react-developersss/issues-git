import React, { Component } from "react";
import { getIssues } from "../utils/get-users";
import Button from "./button";
import Issue from "./issue";

class Issues extends Component {
  render() {
    return (
      <>
        <Button />
        {getIssues(30).map((issue, idx) => (
          <Issue key={idx} issue={issue} />
        ))}
      </>
    );
  }
}

export default Issues;
