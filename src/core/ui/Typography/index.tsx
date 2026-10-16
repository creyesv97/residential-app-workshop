import { useTheme } from "@src/core/config/theme/useTheme";
import { PropsWithChildren } from "react";
import { Text } from "react-native";
import { makeStyles } from "./styles";
import { TypographyWithTextProps } from "./types";

export const Typography = ({
  children,
  variant,
  color,
  style,
  ...props
}: PropsWithChildren<TypographyWithTextProps>) => {
  const { theme, isDarkMode } = useTheme();
  const styles = makeStyles(theme, { variant, color });

  return (
    <Text style={[styles.text, style]} {...props}>
      {children}
    </Text>
  );
};
