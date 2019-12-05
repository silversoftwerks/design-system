const pallets = {
  bauhaus: {
    blue: "#0095c4",
    red: "#e30515",
    yellow: "#ffed00",
    white: "#f8eed9",
    black: "#1d1b15"
  },
  soft: {
    red: "#FF6F5F",
    yellow: "#FFE39F",
    blue: "#A7D2D6",
    white: "#FAF7F5",
    black: "#2E3A3B"
  }
};
const colors = pallets["soft"];
const { blue, red, yellow, white, black } = colors;
const colorsAbstract = {
  storybookArea: blue,
  primary: { blue, red, yellow, white, black },
  darker: [blue, red, yellow],
  darkest: [blue, red, yellow],
  lighter: [blue, red, yellow],
  lightest: [blue, red, yellow],
  greyScale: [white, black]
};
export { colors, colorsAbstract, pallets };
