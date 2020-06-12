import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LogInPage from "./containers/log-in/log-in";

export default function App() {
  return (
    <View style={styles.container}>
      <LogInPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
