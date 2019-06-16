import React from "react";
const Button = ({ label, icon, onClick, border = "none", ...rest }) => (
  <button onClick={onClick} style={{ border,...rest }}>
    {icon || label}
  </button>
);

export default Button;
