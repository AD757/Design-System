import { purple, neutral, yellow, green, red } from "./colors";
import { primaryFont } from "./typography";

export const defaultTheme = {
  primaryColor: purple[300],
  primaryHoverColor: purple[200],
  primaryActiveColor: purple[100],
  formElementBackground: neutral[100],
  textOnFormElementBackground: neutral[600],
  textColorOnPrimary: neutral[100],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont: primaryFont,
  disabled: neutral[400],
  textOnDisabled: neutral[300],
  textFieldBackground: neutral[200],
  textFieldLabelColor: neutral[500],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};

export const darkTheme = {
  primaryColor: neutral[200],
  primaryHoverColor: neutral[300],
  primaryActiveColor: neutral[300],
  primaryDisabledColor: neutral[400],
  textColorOnPrimary: neutral[600],
  textColor: neutral[600],
  textColorInverted: neutral[100],
  primaryFont,
  formElementBackground: neutral[500],
  textOnFormElementBackground: neutral[100],
  status: {
    warningColor: yellow[100],
    warningColorHover: yellow[200],
    warningColorActive: yellow[300],
    errorColor: red[100],
    errorColorHover: red[200],
    errorColorActive: red[300],
    successColor: green[100],
    successColorHover: green[200],
    successColorActive: green[300],
  },
};
