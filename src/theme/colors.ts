import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#00b187",
  primaryBright: "#00b187",
  primaryDark: "#00b187",
  secondary: "#107fb4",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#04658e",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#00b187",
  textDisabled: "#BDC2C4",
  textSubtle: "#00b187",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(180deg, #09c8e6 0%, #0d4f59 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9764ef",
  background: "#f1f1f1",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#014636",
  text: "#00b187",
  textDisabled: "#666171",
  textSubtle: "#00b187",
  borderColor: "#524B63",
  card: "#ffffff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
