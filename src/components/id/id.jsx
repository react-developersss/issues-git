import React, { Component } from "react";
import "./id.scss";

class Id extends Component {
  render() {
    const { issue } = this.props;
    return (
      <p>
        #{issue.id + " opened " + issue.createdDate + "  "} by{" "}
        <a href={issue.user.avatar_url} className="tooltipLink">
          {/* // */}
          <button
            type="button"
            className="btn btn-secondary d-block py-3 px-5"
            data-toggle="tooltip"
            data-html="true"
            title={
              issue.user.username.toUpperCase() +
              " from " +
              issue.user.address.city +
              ", " +
              issue.user.address.state
            }
          >
            {issue.user.username}
          </button>
        </a>
      </p>
    );
  }
}

export default Id;
