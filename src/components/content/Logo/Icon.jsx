import React from "react";
import Box from "../../../../../apps/silver-werkstatte/src/BookingApp/PageContent/PageContentGrid/SideColumnContents/node_modules/@SS/design-system/src/components/layout/Box";
import Billboard from "../../../../../apps/silver-werkstatte/src/BookingApp/PageBillboard/node_modules/@SS/design-system/src/components/typography/Billboard";

const Icon = ({
  children,
  label,
  color={colors.white},
  height = "128px",
  width = "128px",
  accentColor = color,
  times = 4,
  showText = false,
  ...rest
}) => (
  <Box
    justifyContent="center"
    alignItems="center"
    border={`1px sold ${color}`}
    flexDirection="column"
    width={width}
    height={height}
    {...rest}
  >
    <svg width={width} height={height}>
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
export default Icon;
