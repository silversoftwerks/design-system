import React from "react";
export const Button = ({
  label,
  icon,
  onClick,
  border = "none",
  children,
  ...rest
}) => (
  <button onClick={onClick} style={{ border, ...rest }}>
    {icon || label || children}
  </button>
);
