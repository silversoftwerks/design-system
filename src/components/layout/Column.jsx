import React from "react";

const Column = ({
  children,
  start,
  width,
  end = start + width || null,
  ...rest
}) => (
  <div
    style={{
      gridColumnStart: start,
      gridColumnEnd: end,
      ...rest
    }}
  >
    {children}
  </div>
);
export default Column;
