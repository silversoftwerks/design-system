import React from "react";
import Box from "./Box";

const Page = ({ children, width = "100%", height = "100%", ...rest }) => (
  <Box tag="section" {...rest} flexDirection="column">
    {children}
  </Box>
);
export default Page;
