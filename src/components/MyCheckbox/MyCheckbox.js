import React from "react";

import "./styles.css";

export default ({ className, label, ...props }) => {
  return (
    <label>
      <input type="checkbox" className={`checkbox ${className}`} {...props} />
      {label}
    </label>
  );
};
