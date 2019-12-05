import React from "react";
import fontStyles from "../../../constants/font/fontStyles";

export const Text = ({
  children,
  onClick,
  href,
  tag = "span",
  Tag = tag,
  ...rest
}) => (
  <Tag onClick={onClick} href={href} style={{ ...fontStyles.body, ...rest }}>
    {children}
  </Tag>
);
