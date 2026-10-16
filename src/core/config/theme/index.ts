import { BorderRadius, BorderWidth } from "./constants/border";
import { darkColors, lightColors } from "./constants/colors";
import { Size } from "./constants/size";
import { Spacing } from "./constants/spacing";

const commonTheme = {
  spacing: Spacing,
  borderRadius: BorderRadius,
  borderWidth: BorderWidth,
  size: Size,
} as const;

export const lightTheme = {
  ...commonTheme,
  colors: lightColors,
} as const;

export const darkTheme = {
  ...commonTheme,
  colors: darkColors,
} as const;

export type Theme = typeof lightTheme | typeof darkTheme;
