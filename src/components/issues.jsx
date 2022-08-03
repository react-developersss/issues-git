import React, { Component } from "react";
import { getIssues } from "../utils/get-users";
import Button from "./button/button";
import Issue from "./issue/issue";

class Issues extends Component {
  render() {
    const { onFinished, onNoFinished, issues, onAll } = this.props;
    return (
      <>
        <Button
          onFinished={onFinished}
          onNoFinished={onNoFinished}
          onAll={onAll}
        />
        {issues.map((issue, idx) => (
          <Issue key={idx} issue={issue} />
        ))}
      </>
    );
  }
}

export default Issues;
