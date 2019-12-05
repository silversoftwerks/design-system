import React from "react";
import fontStyles from "../../../constants/font/fontStyles";
export const Body = ({ children, level }) => {
  return <p style={fontStyles.body}>{children}</p>;
};
