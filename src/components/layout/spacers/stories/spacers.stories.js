import React from "react";
import { Box } from "../Box";
import { colorsAbstract } from "../../../../constants/color/colorStyles";

export default {
  component: BoxComponent,
  title: "Layout/Spacers"
};

export const BoxComponent = () => (
  <Box backgroundColor={colorsAbstract.storybookArea}></Box>
);
