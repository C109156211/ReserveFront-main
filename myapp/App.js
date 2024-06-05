import * as React from "react";
import { StyleSheet, View } from "react-native";
import DateChoice from "./page/StartReservation";

export default function App() {
  return (
    <View style={styles.container}>
      <DateChoice />
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
