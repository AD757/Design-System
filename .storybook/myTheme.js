import { create } from "@storybook/theming/create";

export default create({
  base: "light",
  colorPrimary: "hotpink",
  colorSecondary: "deepskyblue",

  // UI
  appBg: "white",
  appContentBg: "silver",
  appBorderColor: "grey",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "black",
  textInverseColor: "rgba(255,255,255,0.9)",

  // Toolbar default and active colors
  barTextColor: "black",
  barSelectedColor: "black",
  barBg: "rgba(255,255,255,0.9)",

  // Form colors
  inputBg: "white",
  inputBorder: "silver",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "AD Portfolio 👨‍🎨",
  brandUrl: "https://alladindaher.se",
  brandImage: "https://i.imgur.com/eFfwbLb.png",
});
