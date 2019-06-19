import React from "react";
import Box from "../layout/Box";
import Billboard from "../typography/Billboard";

const Logo = ({
  children,
  label,
  color,
  accentColor = color,
  times = 4,
  ...rest
}) => (
  <Box
    justifyContent="center"
    alignItems="center"
    border={`1px sold ${color}`}
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
    <Billboard fontSize="128px" color={color}>
      {label}
    </Billboard>
  </Box>
);
export default Logo;
