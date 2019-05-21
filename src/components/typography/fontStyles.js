const fontFamilies = {
  pioret: "Poiret One",
  montserrat: "'Montserrat', sans-serif",
  arapey: "'Arapey', serif"
};
const sizes = {
  xs: { fontSize: "8px", lineHeight: "12px" },
  sm: { fontSize: "12px", lineHeight: "16px" },
  md: { fontSize: "16px", lineHeight: "20px" },
  lg: { fontSize: "20px", lineHeight: "24px" },
  xl: { fontSize: "30px", lineHeight: "36px" }
};
const fontStyles = {
  icon: {
    fontFamily: fontFamilies.pioret
  },
  billboard: {},
  header: { fontFamily: fontFamilies.arapey,...sizes.xl },
  body: { fontFamily: fontFamilies.montserrat, ...sizes.md }
  // sm,
  // md,
  // lg,
  // xl
};

export default fontStyles;
