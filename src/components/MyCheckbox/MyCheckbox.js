import React from "react";

import "./styles.css";

export default class MyCheckbox extends React.PureComponent {
  render() {
    const { className, label, ...props } = this.props;
    return (
      <label className="checkboxWrapper">
        <input type="checkbox" className={`checkbox ${className}`} {...props} />
        {label ? <span className="checkboxLabel">{label}</span> : null}
      </label>
    );
  }
}
