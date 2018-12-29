import React from "react";

import "./styles.css";

export default class MyButton extends React.PureComponent {
  render() {
    const { color, children, ...props } = this.props;
    return (
      <button className={`button ${color || "default"}`} {...props}>
        {children}
      </button>
    );
  }
}
