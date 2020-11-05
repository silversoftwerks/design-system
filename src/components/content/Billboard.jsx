import React from "react";
import { Box } from "../layout/spacers/Box";

export const Billboard = ({ children, height = "unset", ...rest }) => (
  <Box
    height={height}
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    {...rest}
  >
    {children}
  </Box>
);
