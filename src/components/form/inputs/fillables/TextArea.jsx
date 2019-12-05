import React from "react";

export const TextArea = ({ value, label, rows, maxCharacterLength }) => (
  <label>
    {label}
    <textarea rows={rows}>{value}</textarea>
  </label>
);
