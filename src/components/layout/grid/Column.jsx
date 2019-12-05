import React from "react";
import { Box } from "../spacers/Box";

export const Column = ({
  children,
  start = 1,
  width = 1,
  minWidth = 0,
  overflow = "hidden",
  end = start + width || null,
  ...rest
}) => (
  <Box
    {...{
      gridColumnStart: start,
      gridColumnEnd: end,
      minWidth,
      overflow,
      ...rest
    }}
  >
    {children}
  </Box>
);
