import React from "react";
import { Text } from "../content/typography/Text";

const Link = ({ label, icon, onClick, src, children, ...rest }) => (
  <Text tag="a" cursor="pointer" href={src} onClick={onClick} {...rest}>
    {children}
  </Text>
);
export default Link;
