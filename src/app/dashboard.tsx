import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Typography } from "@src/core/ui/Typography";

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Typography variant="h1">Dashboard</Typography>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
