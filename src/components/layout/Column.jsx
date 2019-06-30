import React from "react";

const Column = ({
  children,
  start,
  width,
  minWidth = 0,
  overflow = "hidden",
  end = start + width || null,
  ...rest
}) => (
  <div
    style={{
      gridColumnStart: start,
      gridColumnEnd: end,
      minWidth,
      overflow,

      ...rest
    }}
  >
    {children}
  </div>
);
export default Column;
