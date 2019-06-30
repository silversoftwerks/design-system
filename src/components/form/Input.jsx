import React from "react";
export const Input = ({ type, value, placeholder, label }) => (
  <label>
    {label}
    <input type={type} value={value} placeholder={placeholder} />
  </label>
);

const inputTypes = ["text", "password", "checkbox"];
