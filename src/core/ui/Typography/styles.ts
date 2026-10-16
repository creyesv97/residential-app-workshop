import { Theme } from "@src/core/config/theme";
import { StyleSheet } from "react-native";
import { TypographyVariant } from "./enums";
import { FontSizeMapper, FontWeightMapper, LineHeightMapper } from "./mappers";
import { TypographyProps } from "./types";

export const makeStyles = (
  theme: Theme,
  { variant = TypographyVariant.BODY, color }: TypographyProps,
) => {
  const _color = color ?? theme.colors.typography.default;
  return StyleSheet.create({
    text: {
      fontSize: FontSizeMapper[variant],
      lineHeight: LineHeightMapper[variant],
      fontWeight: FontWeightMapper[variant] as never,
      color: _color,
    },
  });
};
