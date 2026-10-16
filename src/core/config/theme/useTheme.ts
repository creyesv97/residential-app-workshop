import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from ".";

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const theme = isDarkMode ? darkTheme : lightTheme;

  return {
    isDarkMode,
    theme,
  };
};
