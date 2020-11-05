import React, { Fragment } from "react";
import { Box } from "../layout/spacers/Box";
import { baseUnit } from "../../constants/spacing";
import { Text } from "../content/typography/Text";
const paths = {
  not_interested: {
    path: {
      d:
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z",
    },
  },
  directions_walk: {
    path: {
      d:
        "M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7",
    },
  },
  follow_the_signs: {
    path: {
      d:
        "M9.5,5.5c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S8.4,5.5,9.5,5.5z M5.75,8.9L3,23h2.1l1.75-8L9,17v6h2v-7.55L8.95,13.4 l0.6-3C10.85,12,12.8,13,15,13v-2c-1.85,0-3.45-1-4.35-2.45L9.7,6.95C9.35,6.35,8.7,6,8,6C7.75,6,7.5,6.05,7.25,6.15L2,8.3V13h2 V9.65L5.75,8.9 M13,2v7h3.75v14h1.5V9H22V2H13z M18.01,8V6.25H14.5v-1.5h3.51V3l2.49,2.5L18.01,8z",
    },
  },
};
export const Icon = ({
  label,
  icon = "not_interested",
  iconLeft = icon,
  iconRight = null,
  outlineColor,
  fill = "black",
  size,
  sizeToRem = size * baseUnit + "rem",
  ...rest
}) => (
  <Fragment>
    <Box flexDirection="column" justifyContent="center" alignItems="center">
      <Box
        justifyContent="center"
        alignItems="center"
        borderRadius="50%"
        lineHeight={rest.height}
        {...rest}
      >
        {iconLeft && (
          <svg
            viewBox="0 0 24 24"
            width="18px"
            height="18px"
            stroke={outlineColor}
            fill={fill}
            style={{ width: sizeToRem, height: sizeToRem }}
          >
            <path d={paths[iconLeft].path.d}></path>
          </svg>
        )}
        {iconRight && (
          <svg
            viewBox="0 0 24 24"
            width="18px"
            height="18px"
            stroke={outlineColor}
            fill={fill}
            style={{ width: sizeToRem, height: sizeToRem }}
          >
            <path d={paths[iconRight].path.d}></path>
          </svg>
        )}
      </Box>
      <Text>{label}</Text>
    </Box>
  </Fragment>
);

export default Icon;
