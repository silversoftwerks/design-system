import React from "react";
import fontStyles from "./fontStyles";
import Box from "../layout/Box";
import { colors, colorsAbstract } from "../color/colorStyles";

const Header = ({
  children,
  level,
  accented,
  accentColor = colorsAbstract.primary.yellow,
  ...rest
}) => {
  return (
    <Box
      flexDirection="column"
      width="fit-content"
      height="fit-content"
      paddingBottom="16px"
    >
      <h1 style={{ ...fontStyles.header, margin: 0, ...rest }}>{children}</h1>
      {accented && (
        <Box width="min" backgroundColor={accentColor} height="4px" />
      )}
    </Box>
  );
};
export default Header;
