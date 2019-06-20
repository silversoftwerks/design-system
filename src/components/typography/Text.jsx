import React from "react";
import fontStyles from "./fontStyles";

export default (Text = ({
  children,
  onClick,
  href,
  tag = 'span',
  Tag = tag,
  ...rest
}) => (
  <Tag onClick={onClick} href={href} style={{ ...fontStyles.body, ...rest }}>
    {children}
  </Tag>
));
