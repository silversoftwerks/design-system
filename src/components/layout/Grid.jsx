import React from "react";
const Grid = ({
  children,
  columns = 1,
  rows = 1,
  fill = false,
  fillHorizontal = true,
  fillVertical = fill,
  width = fillHorizontal ? "100%" : "unset",
  height = fillVertical ? "100%" : "unset",
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
      width,
      height,
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
