import React from "react";
import Box from "../layout/Box";
import Billboard from "../typography/Billboard";
const Logo = ({ children, label, color, ...rest }) => (
  <Box
    justifyContent="center"
    alignItems="center"
    border={`1px sold ${color}`}
    {...rest}
  >
    <Billboard color={color}>{label}</Billboard>
  </Box>
);
export default Logo;
