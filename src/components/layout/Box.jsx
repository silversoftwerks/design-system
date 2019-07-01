import React from "react";
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
  fontProps
} from "../propHelpers";
const Box = ({
  children,
  //
  display = "flex",
  //
  cursor,
  //
  boxShadow,
  measureRef,
  ...rest
}) => {
  return (
    <div
      {...rest}
      ref={measureRef}
      style={{
        boxSizing: "border-box",
        display,
        cursor,

        ...accessibilityProps(rest),
        ...eventProps(rest),
        ...animationProps(rest),
        ...flexboxProps(rest),
        ...colorProps(rest),
        ...sizeProps(rest),
        ...marginProps(rest),
        ...borderProps(rest),
        ...paddingProps(rest),
        ...backgroundProps(rest),
        boxShadow,
        ...rest
      }}
    >
      {typeof children !== "string" ? (
        children
      ) : (
        <Text
          style={{
            transform,
            animation,
            transition,
            ...fontProps,
            // ...borderProps,
            // ...paddingProps,
            marginProps
          }}
        >
          {children}
        </Text>
      )}
    </div>
  );
};

export default Box;
