import React from "react";
import Body from "../components/typography/Body";
import Box from "../components/layout/Box";
import { colorsAbstract, colors } from "../components/color/colorStyles";

export const Tab = ({ focused, label, index, tabArray, ...rest }) => (
  <Box paddingRight={24} cursor="pointer" flexDirection="row" {...rest}>
    <Box
      width={focused ? "8px" : "4px"}
      height="100%"
      transition=".5s width"
      backgroundColor={
        colorsAbstract.primary[index % colorsAbstract.primary.length]
      }
    />
    <Body
      style={{
        padding: "16px",
        paddingLeft: focused ? "4px" : "8px",
        paddingRight: "16px",
        color: focused
          ? colorsAbstract.primary[index % colorsAbstract.primary.length]
          : colors.black
      }}
    >
      {label}
    </Body>
  </Box>
);
// transform={`rotate(${(index * 180) /
//   tabArray.length}deg) translate(20px,20px)`}
