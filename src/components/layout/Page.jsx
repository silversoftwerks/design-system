import React from "react";
import Box from "./Box";

const Page = ({
  children,
  width = "100%",
  height = "100%",
  measureRef,
  ...rest
}) => (
  <Box tag="section" measureRef={measureRef} {...rest} flexDirection="column">
    {children}
  </Box>
);

export default Page;
