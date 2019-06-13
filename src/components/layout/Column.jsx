import React from "react";

const Column = ({ children, start, width, ...rest }) => (
  <div
    style={{
      gridColumnStart: start,
      gridColumnEnd: start + width,
      ...rest
    }}
  >
    {children}
  </div>
)
export default Column
