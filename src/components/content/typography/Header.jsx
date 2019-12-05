import React from "react";
import fontStyles from "../../../constants/font/fontStyles";
import { Box } from "../../layout/spacers/Box";

export const Header = ({ children, level, accented, accentColor, ...rest }) => {
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
