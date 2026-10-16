import { StyleSheet, View } from "react-native";

import { useTheme } from "@src/core/config/theme/useTheme";
import { Typography } from "@src/core/ui/Typography";

export default function HomeScreen() {
  const { theme } = useTheme();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.background.default },
      ]}
    >
      <View style={{ alignItems: "center" }}>
        <Typography variant="h1-bold">Hello World!</Typography>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
