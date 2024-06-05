import * as React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import Calendar from "../component/Calendar";
import SelectTime from "../component/SelectTime";

function DateChoice() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
      <Image
        resizeMode="cover"
        source={require("C:/Users/USER/ReserveFront-main/myapp/assets/ic_round-menu.png")}
        style={styles.headerImage}
      />      
    </View>
      <Text style={styles.headerText}>開始預約</Text>
      <View style={[styles.contentContainer, { marginTop: 10}]}>
        <Calendar />
        <SelectTime />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEF1F4",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 80,
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
  },
  headerContainer: {
    backgroundColor: "#B5BECC",
    width: "100%",
    padding: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  headerImage: {
    width: 28,
    height: 28,
    marginRight: 10,
  },
  headerText: {
    color: "#353535",
    fontWeight: "700",
    fontSize: 18,
    fontFamily: "Roboto, sans-serif",
    marginTop: 10,
  },
  contentContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
});

export default DateChoice;
