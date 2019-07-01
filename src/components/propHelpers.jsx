export const fontProps = ({ color, fontFamily, fontSize }) => ({
  color,
  fontFamily,
  fontSize
});
export const sizeProps = ({
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
export const colorProps = ({ color, backgroundColor }) => ({
  color,
  backgroundColor
});
export const borderProps = ({
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
export const flexboxProps = ({
  flexDirection,
  flexWrap,
  flex,
  flexGrow,
  flexShrink,
  justifyContent,
  alignItems
}) => ({
  flexDirection,
  flexWrap,
  flex,
  flexGrow,
  flexShrink,
  justifyContent,
  alignItems
});

export const paddingProps = ({
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
export const marginProps = ({
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
export const accessibilityProps = ({
  accessible,
  accessibilityRole,
  ariaLevel
}) => ({
  accessible,
  accessibilityRole,
  "aria-level": ariaLevel
});
export const eventProps = ({ onFocus, onClick, onHover }) => ({
  onFocus,
  onClick,
  onHover
});
export const animationProps = ({
  transform,
  animation,
  transition = ".2s ease"
}) => ({
  transform,
  animation,
  transition
});
export const backgroundProps = ({ backgroundImage, backgroundColor }) => ({
  backgroundImage,
  backgroundColor
});
