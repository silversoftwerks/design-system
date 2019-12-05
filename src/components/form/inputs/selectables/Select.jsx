import React from "react";
export const Select = ({ options, value }) => (
  <select value={value}>
    {options.map(option => (
      <option>{option}</option>
    ))}
  </select>
);
