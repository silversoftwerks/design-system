import React from "react";
import fontStyles from "../../constants/font/fontStyles";
import {
  accessibilityProps,
  eventProps,
  animationProps,
  colorProps,
  sizeProps,
  marginProps,
  borderProps,
  paddingProps,
  flexboxProps,
  backgroundProps,
  fontProps,
} from "../propHelpers";
import { constants } from "buffer";

export const Button = ({
  label,
  icon,
  onClick,
  border = "none",
  children,
  transition = ".2s ease",

  onMouseDown,
  onPointerDown = onMouseDown,
  onMouseUp,
  onPointerUp = onMouseUp,
  ...rest
}) => (
  <button
    onClick={onClick}
    style={{
      ...fontStyles.body,
      ...rest,
      boxSizing: "border-box",
      ...borderProps({ border, ...rest }),
      ...accessibilityProps(rest),
      ...eventProps(rest),
      ...flexboxProps(rest),
      ...colorProps(rest),
      ...sizeProps(rest),
      ...marginProps(rest),
      ...paddingProps(rest),
      ...backgroundProps(rest),
      ...animationProps({ transition, ...rest }),
    }}
    {...{ onMouseDown, onMouseUp, onPointerDown, onPointerUp }}
    {...rest}
  >
    {icon || label || children}
  </button>
);
