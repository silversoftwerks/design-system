import React from "react";
import Box from "../layout/Box";
import fontStyles from "../typography/fontStyles";
const Icon = ({ label, ...rest }) => (
  <Box
    justifyContent="center"
    alignItems="center"
    borderRadius="50%"
    lineHeight={rest.height}
    {...fontStyles.icon}
    {...rest}
  >
    {label}
  </Box>
);

export default Icon;
