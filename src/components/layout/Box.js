import React from "react";
import { View, Text } from "react-native";
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
  cursor,
  //
  backgroundColor,
  //
  border,
  borderRadius,
  //
  width,
  height,
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
  const borderProps = {
    border,
    borderRadius
  };
  const paddingProps = {
    padding,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight
  };
  const marginProps = {
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight
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
    <View
      {...accessibilityProps}
      {...eventProps}
      {...rest}
      style={{
        cursor,
        transform,
        animation,
        transition,
        ...borderProps,
        ...flexBoxProps,
        ...colorProps,
        ...sizeProps,
        ...paddingProps,
        ...marginProps
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
            ...fontProps
          }}
        >
          {children}
        </Text>
      )}
    </View>
  );
};
export default Box;
