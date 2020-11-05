import React, { useEffect, useState } from "react";
import { Box } from "../spacers/Box";

export const Page = ({
  children,
  width = "100%",
  height = "100%",
  ...rest
}) => {
  // const [size] = useGetSize();
  return (
    <Box
      height="-webkit-fill-available"
      tag="section"
      {...rest}
      flexDirection="column"
    >
      {children}
    </Box>
  );
};
const useGetSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const getSize = ({ target, width = 0, height = 0 }) => {
      setSize({ width, height });
    };
    window.addEventListener("resize", true, getSize);
    return () => removeEventListener("resize", true, getSize);
  });
  return [size];
};
