import React, { Component } from "react";
import "./tag.scss";

class Tag extends Component {
  render() {
    const { issue } = this.props;
    return (
      <div>
        <>
          {issue.tags.map((tag, idx) => (
            <span
              key={idx}
              className={tag.type}
              data-toggle="tooltip"
              data-placement="bottom"
              title="A potential issue that we haven't yet confirmed as a bug"
            >
              {tag.type[0].toUpperCase() + tag.type.substring(1)} : {tag.label}{" "}
            </span>
          ))}
        </>
      </div>
    );
  }
}

export default Tag;
