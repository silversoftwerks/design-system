import React from "react";
import Box from "../layout/Box";

export const Billboard = ({ children, height = "60%", ...rest }) => (
  <Box
    height={height}
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    {children}
  </Box>
);
