import React from "react";

import "./styles.css";

export default ({ className, ...props }) => {
  return <input type="text" className={`inputText ${className}`} {...props} />;
};
