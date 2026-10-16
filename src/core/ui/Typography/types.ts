import type { TextProps } from "react-native";
import type { TypographyVariant } from "./enums";

export type TypographyProps = {
  variant?: `${TypographyVariant}`;
  color?: string;
};

export type TypographyWithTextProps = TypographyProps & TextProps;
