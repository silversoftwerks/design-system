import React from "react";
import fontStyles from "../typography/fontStyles";
export const Button = ({
  label,
  icon,
  onClick,
  border = "none",
  children,
  fill = false,
  width = fill ? "100%" : "unset",
  transition = ".2s ease",

  onMouseDown,
  onPointerDown = onMouseDown,
  onMouseUp,
  onPointerUp = onMouseUp,
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
      transition,
      width,
      ...rest
    }}
    {...{ onMouseDown, onMouseUp, onPointerDown, onPointerUp }}
    {...rest}
  >
    {icon || label || children}
  </button>
);
