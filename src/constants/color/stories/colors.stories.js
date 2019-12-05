import React, { Fragment } from "react";
import { colors, pallets } from "../colorStyles";
import { Box } from "../../../components/layout/spacers/Box";
import { Header } from "../../../components/content/typography/Header";
import { Text } from "../../../components/content/typography/Text";

export default {
  component: Colors,
  title: "Constants/Colors"
};
const colorGroups = { colors, pallets };
export const Colors = () => (
  <Box flexDirection="column" justifyContent="space-between">
    <Header>Color Pallets</Header>
    {Object.entries(pallets).map(([groupName, colors]) => (
      <Fragment>
        <Header level={1}>{groupName.toUpperCase()}</Header>
        <Box padding={4} justifyContent="space-between">
          {Object.entries(colors).map(
            ([colorName, color], index, array, arrayLength = array.length) => (
              <Box
                width={`${100 / arrayLength}%`}
                height="100px"
                backgroundColor={color}
                justifyContent="center"
                alignItems="center"
              >
                <Text>{colorName}</Text>
              </Box>
            )
          )}
        </Box>
      </Fragment>
    ))}
  </Box>
);
