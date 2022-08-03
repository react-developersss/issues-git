import React, { Component } from "react";
import Id from "../id/id";
import "./issue.scss";
import Tag from "../tag/tag";

class Issue extends Component {
  render() {
    const { issue } = this.props;
    console.log(issue);
    return (
      <div>
        <div className="issue">
          <div className="issue-title">
            <span>{iconDecoration}</span>
            <h3>{issue.title}. </h3>
            <Tag issue={issue} />
            <div className="issue-comment">
              <span>{iconComment}</span>
              <span>{issue.comments}</span>
            </div>
          </div>
          <div className="issue-id">
            <Id issue={issue} />
          </div>
        </div>
      </div>
    );
  }
}

const iconDecoration = (
  <svg
    className="octicon octicon-issue-opened open"
    viewBox="0 0 16 16"
    version="1.1"
    width="16"
    height="16"
    aria-hidden="true"
  >
    <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
    <path d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
  </svg>
);

const iconComment = (
  <svg
    aria-hidden="true"
    height="16"
    viewBox="0 0 16 16"
    version="1.1"
    width="16"
    data-view-component="true"
    className="octicon octicon-comment v-align-middle"
  >
    <path d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"></path>
  </svg>
);

export default Issue;
