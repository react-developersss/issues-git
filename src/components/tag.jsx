import React, { Component } from "react";
import "./tag.scss";

class Tag extends Component {
  render() {
    const { issue } = this.props;
    return (
      <div>
        <>
          {issue.tags.map((tag, idx) => (
            <span key={idx} className={tag.type}>
              {tag.type[0].toUpperCase() + tag.type.substring(1)} : {tag.label}{" "}
            </span>
          ))}
        </>
      </div>
    );
  }
}

export default Tag;
