import { TypographyVariant } from "./enums";

export const FontSizeMapper: Record<TypographyVariant, number> = {
  [TypographyVariant.H1]: 32,
  [TypographyVariant.H1_BOLD]: 32,
  [TypographyVariant.H2]: 24,
  [TypographyVariant.H2_BOLD]: 24,
  [TypographyVariant.BODY]: 16,
  [TypographyVariant.BODY_BOLD]: 16,
  [TypographyVariant.CAPTION]: 12,
  [TypographyVariant.CAPTION_BOLD]: 12,
};

export const LineHeightMapper: Record<TypographyVariant, number> = {
  [TypographyVariant.H1]: 40,
  [TypographyVariant.H1_BOLD]: 40,
  [TypographyVariant.H2]: 32,
  [TypographyVariant.H2_BOLD]: 32,
  [TypographyVariant.BODY]: 24,
  [TypographyVariant.BODY_BOLD]: 24,
  [TypographyVariant.CAPTION]: 16,
  [TypographyVariant.CAPTION_BOLD]: 16,
};

export const FontWeightMapper: Record<TypographyVariant, string> = {
  [TypographyVariant.H1]: "400",
  [TypographyVariant.H1_BOLD]: "700",
  [TypographyVariant.H2]: "400",
  [TypographyVariant.H2_BOLD]: "700",
  [TypographyVariant.BODY]: "400",
  [TypographyVariant.BODY_BOLD]: "700",
  [TypographyVariant.CAPTION]: "400",
  [TypographyVariant.CAPTION_BOLD]: "700",
};
