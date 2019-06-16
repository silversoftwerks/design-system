import React from "react";
import fontStyles from "./fontStyles";
const Billboard = ({ children, level, ...rest }) => {
  return <h1 style={{ ...fontStyles.billboard, ...rest }}>{children}</h1>;
};
export default Billboard;
