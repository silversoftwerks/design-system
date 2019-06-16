import React from "react";
import fontStyles from "./fontStyles";
const Billboard = ({ children, level, color, ...rest }) => {
  return (
    <h1 style={{ ...fontStyles.billboard, ...rest, color }}>{children}</h1>
  );
};
export default Billboard;
