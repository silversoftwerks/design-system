import React from "react";
import fontStyles from "./fontStyles";

export default (Text = ({ children, ...rest }) => (
  <span style={{ ...fontStyles.body, ...rest }}>{children}</span>
));
