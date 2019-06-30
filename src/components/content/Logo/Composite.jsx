import React from "react";
import { Billboard } from "./../Billboard";
import Box from "./../../layout/Box";
const Logo = ({
  children,
  label,
  color = "white",
  accentColor = color,
  times = 4,
  showText = !!label,
  ...rest
}) => (
  <Box
    justifyContent="center"
    alignItems="center"
    border={`1px sold ${color}`}
    flexDirection="column"
    {...rest}
  >
    <svg height="128px" width="128px">
      {new Array(times)
        .fill(0)
        .map((v, i) => i)
        .map(v => (
          <polygon
            points="0,0 128,0 128,128"
            fill="transparent"
            stroke={v == 3 ? accentColor : color}
            strokeWidth="3"
            class="triangle"
            transform={`rotate(${360 / v})`}
            style={{ transformOrigin: "center" }}
          />
        ))}
    </svg>
    {showText && (
      <Billboard fontSize="128px" color={color}>
        {label}
      </Billboard>
    )}
  </Box>
);
export default Logo;
