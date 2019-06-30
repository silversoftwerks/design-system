import React from "react";
const Box = ({
  children,
  flexDirection,
  flexWrap,
  flex,
  flexGrow,
  flexShrink,
  justifyContent,
  alignItems,
  backgroundImage,
  fill = false,
  fillHorizontal = true,
  fillVertical = fill,
  //
  display = "flex",
  //
  cursor,
  //
  backgroundColor,
  //
  border,
  borderVertical = border,
  borderHorizontal = border,
  borderLeft = borderHorizontal,
  borderRight = borderHorizontal,
  borderTop = borderVertical,
  borderBottom = borderVertical,
  borderRadius,
  //
  width = fillHorizontal ? "100%" : "unset",
  height = fillVertical ? "100%" : "unset",

  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  //
  padding,
  paddingVertical = padding,
  paddingHorizontal = padding,
  paddingTop = paddingVertical,
  paddingBottom = paddingVertical,
  paddingLeft = paddingHorizontal,
  paddingRight = paddingHorizontal,
  //
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  //
  accessible,
  accessibilityRole,
  ariaLevel,
  //
  color,
  fontFamily,
  fontSize,
  //
  transform,

  animation,
  transition,
  //
  onFocus,
  onClick,
  onHover,
  measureRef,
  ...rest
}) => {
  const flexBoxProps = {
    flexDirection,
    flexWrap,
    flex,
    flexGrow,
    flexShrink,
    justifyContent,
    alignItems
  };
  const sizeProps = {
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight
  };

  const colorProps = {
    backgroundColor
  };
  // const borderProps = {
  //   border,
  //   borderRadius
  // };
  // const paddingProps = {
  //   paddingTop,
  //   paddingBottom,
  //   paddingLeft,
  //   paddingRight,
  //   padding
  // };
  const marginProps = {
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    margin
  };
  const accessibilityProps = {
    accessible,
    accessibilityRole,
    "aria-level": ariaLevel
  };
  const fontProps = {
    color,
    fontFamily,
    fontSize
  };
  const eventProps = {
    onFocus,
    onClick,
    onHover
  };
  return (
    <div
      {...accessibilityProps}
      {...eventProps}
      {...rest}
      ref={measureRef}
      style={{
        boxSizing: "border-box",
        display,
        cursor,
        transform,
        animation,
        transition,
        ...flexBoxProps,
        ...colorProps,
        ...sizeProps,
        ...marginProps,
        border,
        borderLeft,
        borderRight,
        borderTop,
        borderBottom,
        borderRadius,
        padding,
        paddingLeft,
        paddingRight,
        paddingBottom,
        paddingTop,
        backgroundImage,
        margin,
        flex
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
