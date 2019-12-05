import React from "react";
import fontStyles from "../../../constants/font/fontStyles";
export const Billboard = ({ children, level, color, ...rest }) => {
  return (
    <h1 style={{ ...fontStyles.billboard, ...rest, color }}>{children}</h1>
  );
};
