import React from "react";
import fontStyles from "../typography/fontStyles";
export const Button = ({
  label,
  icon,
  onClick,
  border = "none",
  children,
  ...rest
}) => (
  <button
    onClick={onClick}
    style={{
      ...fontStyles.body,
      boxSizing: "border-box",
      border,
      minHeight: "48px",
      paddingTop: "0",
      paddingLeft: "16px",
      paddingRight: "16px",
      paddingBottom: "0",
      ...rest
    }}
    {...rest}
  >
    {icon || label || children}
  </button>
);
