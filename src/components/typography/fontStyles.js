const fontFamilies = {
  pioret: "Poiret One",
  montserrat: "'Montserrat', sans-serif",
  arapey: "'Arapey', serif"
};
const sizes = {
  xs: { fontSize: "8px", lineHeight: "12px", margin: 0 },
  sm: { fontSize: "12px", lineHeight: "16px", margin: 0 },
  md: { fontSize: "16px", lineHeight: "20px", margin: 0 },
  lg: { fontSize: "20px", lineHeight: "24px", margin: 0 },
  xl: { fontSize: "32px", lineHeight: "44px", margin: 0 },
  xxl: { fontSize: "64px", lineHeight: "72px", margin: 0 }
};
const fontStyles = {
  sizes,
  icon: {
    fontFamily: fontFamilies.pioret
  },
  billboard: { fontFamily: fontFamilies.pioret, ...sizes.xxl },
  header: { fontFamily: fontFamilies.montserrat, ...sizes.xl },
  body: { fontFamily: fontFamilies.montserrat, ...sizes.md }
  // sm,
  // md,
  // lg,
  // xl
};

export default fontStyles;
