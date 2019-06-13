import React from "react";
const Grid = ({
  children,
  columns = 1,
  rows = 1,
  gap,
  rowGap,
  columnGap,
  ...rest
}) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
      gap,
      rowGap,
      columnGap,
      ...rest
    }}
  >
    {children}
  </div>
);

export default Grid;
