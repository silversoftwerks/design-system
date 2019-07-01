import React from "react";
import { flexboxProps } from "./flexboxProps";
const fontProps = ({ color, fontFamily, fontSize }) => ({
  color,
  fontFamily,
  fontSize
});
const sizeProps = ({
  fill = false,
  fillHorizontal = true,
  fillVertical = fill,
  width = fillHorizontal ? "100%" : "unset",
  height = fillVertical ? "100%" : "unset",
  minWidth,
  minHeight,
  maxWidth,
  maxHeight
}) => ({
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight
});
const colorProps = ({ color, backgroundColor }) => ({
  color,
  backgroundColor
});
const borderProps = ({
  border,
  borderVertical = border,
  borderHorizontal = border,
  borderLeft = borderHorizontal,
  borderRight = borderHorizontal,
  borderTop = borderVertical,
  borderBottom = borderVertical,
  borderRadius
}) => ({
  border,
  borderLeft,
  borderRight,
  borderTop,
  borderBottom,
  borderRadius
});
const paddingProps = ({
  padding,
  paddingVertical = padding,
  paddingHorizontal = padding,
  paddingTop = paddingVertical,
  paddingBottom = paddingVertical,
  paddingLeft = paddingHorizontal,
  paddingRight = paddingHorizontal
}) => ({
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight
});
const marginProps = ({
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight
}) => ({
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight
});
const accessibilityProps = ({ accessible, accessibilityRole, ariaLevel }) => ({
  accessible,
  accessibilityRole,
  "aria-level": ariaLevel
});

const eventProps = ({ onFocus, onClick, onHover }) => ({
  onFocus,
  onClick,
  onHover
});

const animationProps = ({ transform, animation, transition = ".2s ease" }) => ({
  transform,
  animation,
  transition
});

const backgroundProps = ({ backgroundImage, backgroundColor }) => ({
  backgroundImage,
  backgroundColor
});
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
