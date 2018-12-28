import React from "react";

import "./styles.css";

export default ({ color, children, ...props }) => {
  return (
    <button className={`button ${color || "default"}`} {...props}>
      {children}
    </button>
  );
};
