import React from "react";
import Box from "./Box";

const Page = ({ children, ...rest }) => (
  <Box tag="section" {...rest} flexDirection="column">
    {children}
  </Box>
);
export default Page;
