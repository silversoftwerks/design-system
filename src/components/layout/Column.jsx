import React from "react";

export default (Column = ({ children, start, width, ...rest }) => (
  <div
    style={{
      gridColumnStart: start,
      gridColumnEnd: start + width,
      ...rest
    }}
  >
    {children}
  </div>
));
