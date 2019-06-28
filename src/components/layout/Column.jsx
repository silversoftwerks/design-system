import React from "react";

const Column = ({ children, start = 1, width = 1, ...rest }) => (
  <div
    style={{
      gridColumnStart: start,
      gridColumnEnd: start + width,
      ...rest
    }}
  >
    {children}
  </div>
);
export default Column;
