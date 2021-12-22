import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    white: "#FFFFFF",
    light: "#F0F7EE",
    grey: "#6b6b6b",
    greyLight: "#d9d9d9",
    sun: "#FA9F42",
    blueLight: "#63e3ff",
    blue: "#0EB1D2",
    blueDarker: "#0081a1",
    orangeLight: "#ff6a5b",
    orange: "#F13030",
    orangeDark: "#b60007",
    green: "#23967F",
    lime: "#C5D86D",
    purple: "#EAE8FF",
    blackLighter: "#3a3a3a",
    blackLightest: "#646464",
    black: "#141414",
    blackDark: "#000000",
    blackHover: "rgba(20, 20, 20, 0.973)",
    blackLight: "rgba(20, 20, 20, 0.1)",
  },
  size: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "425px",
    tablet: "768px",
    laptop: "1024px",
    laptopL: "1440px",
    desktopS: "1600px",
    desktop: "1920px",
    desktopL: "2560px",
  },
  boxShadow: {
    threeD: `rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -29px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 2px 16px;`,
    threeD_hover: ` rgba(0, 0, 0, 0.17) 0px -13px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -16px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -19px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 2px 16px`,
  },
};

const device = {
  mobileS: `(min-width: ${theme.size.mobileS})`,
  mobileM: `(min-width: ${theme.size.mobileM})`,
  mobileL: `(min-width: ${theme.size.mobileL})`,
  tablet: `(min-width: ${theme.size.tablet})`,
  laptop: `(min-width: ${theme.size.laptop})`,
  laptopL: `(min-width: ${theme.size.laptopL})`,
  desktopS: `(min-width: ${theme.size.desktopS})`,
  desktop: `(min-width: ${theme.size.desktop})`,
  desktopL: `(min-width: ${theme.size.desktopL})`,
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
