import React from "react";
import fontStyles from "./fontStyles";
const Body = ({ children, level }) => {
  return <p style={fontStyles.body}>{children}</p>;
};
export default Body;
