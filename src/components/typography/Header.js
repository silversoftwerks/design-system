import React from 'react'
import fontStyles from "./fontStyles";
const Header = ({ children, level }) => {
  return <h1 style={fontStyles.header}>{children}</h1>;
};
export default Header;
