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
  //
  display = "flex",
  //
  cursor,
  //
  backgroundColor,
  //
  border,
  borderRadius,
  //
  width = "100%",
  height = "100%",
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  //
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
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
      style={{
        display,
        cursor,
        transform,
        animation,
        transition,
        ...borderProps,
        ...flexBoxProps,
        ...colorProps,
        ...sizeProps,
        ...marginProps,
        padding,
        paddingBottom,
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
            ...borderProps,
            // paddingProps,
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
