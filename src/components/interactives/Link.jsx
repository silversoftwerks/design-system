import React from "react";
import Text from "../typography/Text";
const Link = ({ label, icon, onClick, src, children, ...rest }) => (
  <Text tag="a" src={src} onClick={onClick} {...rest}>
    {children}
  </Text>
);
export default Link;
