import React from "react";
import Box from "./Box";

const Page = React.forwardRef(
  ({ children, width = "100%", height = "100%", ...rest }, ref) => (
    <Box tag="section" ref={ref} {...rest} flexDirection="column">
      {children}
    </Box>
  )
);
Page.displayName = "Page";

export default Page;
