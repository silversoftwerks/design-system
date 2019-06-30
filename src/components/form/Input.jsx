import React from "react";
import fontStyles from "./../typography/fontStyles";
export const Input = ({ type, value, placeholder, label, border, ...rest }) => (
  <label
    style={{ ...rest, border, boxSizing: "border-box", minHeight: "48px" }}
  >
    {label}
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      style={{
        ...fontStyles.body,
        boxSizing: "border-box",
        minHeight: "48px",
        border: "none",
        paddingLeft: "16px",
        ...rest
      }}
    />
  </label>
);

const inputTypes = ["text", "password", "checkbox"];
