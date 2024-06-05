import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

function SelectTime() {
  const [clickedTime, setClickedTime] = useState(null);

  const handleTimeClick = (time) => {
    setClickedTime(time);
  };

  return (
    <View style={styles.selectTimeContainer}>
      <View style={styles.timeSlots}>
        <View style={styles.timeSlotFrame}>
          <Text style={styles.periodText}>上午</Text>
          <TouchableOpacity
            style={[styles.timeButton, clickedTime === "11:00" && styles.clickedTimeButton]}
            onPress={() => handleTimeClick("11:00")}
          >
            <Text style={[styles.timeText, clickedTime === "11:00" && styles.clickedTimeText]}>11:00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeButton, clickedTime === "11:30" && styles.clickedTimeButton]}
            onPress={() => handleTimeClick("11:30")}
          >
            <Text style={[styles.timeText, clickedTime === "11:30" && styles.clickedTimeText]}>11:30</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeButton, clickedTime === "12:00" && styles.clickedTimeButton]}
            onPress={() => handleTimeClick("12:00")}
          >
            <Text style={[styles.timeText, clickedTime === "12:00" && styles.clickedTimeText]}>12:00</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.timeSlotFrame}>
          <Text style={styles.periodText}>下午</Text>
          <TouchableOpacity
            style={[styles.timeButton, clickedTime === "14:00" && styles.clickedTimeButton]}
            onPress={() => handleTimeClick("14:00")}
          >
            <Text style={[styles.timeText, clickedTime === "14:00" && styles.clickedTimeText]}>14:00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeButton, clickedTime === "14:30" && styles.clickedTimeButton]}
            onPress={() => handleTimeClick("14:30")}
          >
            <Text style={[styles.timeText, clickedTime === "14:30" && styles.clickedTimeText]}>14:30</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeButton, clickedTime === "15:00" && styles.clickedTimeButton]}
            onPress={() => handleTimeClick("15:00")}
          >
            <Text style={[styles.timeText, clickedTime === "15:00" && styles.clickedTimeText]}>15:00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeButton, clickedTime === "15:30" && styles.clickedTimeButton]}
            onPress={() => handleTimeClick("15:30")}
          >
            <Text style={[styles.timeText, clickedTime === "15:30" && styles.clickedTimeText]}>15:30</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.timeSlotFrame}>
          <Text style={styles.periodText}>晚上</Text>
          <TouchableOpacity
            style={[styles.timeButton, clickedTime === "18:30" && styles.clickedTimeButton]}
            onPress={() => handleTimeClick("18:30")}
          >
            <Text style={[styles.timeText, clickedTime === "18:30" && styles.clickedTimeText]}>18:30</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeButton, clickedTime === "19:30" && styles.clickedTimeButton]}
            onPress={() => handleTimeClick("19:30")}
          >
            <Text style={[styles.timeText, clickedTime === "19:30" && styles.clickedTimeText]}>19:30</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeButton, clickedTime === "20:00" && styles.clickedTimeButton]}
            onPress={() => handleTimeClick("20:00")}
          >
            <Text style={[styles.timeText, clickedTime === "20:00" && styles.clickedTimeText]}>20:00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.timeButton, clickedTime === "21:30" && styles.clickedTimeButton]}
            onPress={() => handleTimeClick("21:30")}
          >
            <Text style={[styles.timeText, clickedTime === "21:30" && styles.clickedTimeText]}>21:30</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  selectTimeContainer: {
    width: 375,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    padding: 10,
    marginTop: -20, // Ensure it's close to the Calendar
  },
  timeSlots: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20, // Set spacing to 20
  },
  timeSlotFrame: {
    alignItems: "center",
    marginHorizontal: 10, // Set horizontal margin for space between frames
  },
  periodText: {
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 20, // Increase margin bottom for more space between periods
    color: "#333",
  },
  timeText: {
    fontSize: 12,
    color: "#333",
    textAlign: "center",
  },
  timeButton: {
    marginBottom: 15,
    width: 72, // Set a fixed width for consistent button size
    height: 25, // Set a fixed height for consistent button size
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0, // Remove border initially
  },
  clickedTimeButton: {
    backgroundColor: "#B5BECC", // Set background color when clicked
  },
  clickedTimeText: {
    color: "#FFF", // Set text color to white when clicked
  },
});

export default SelectTime;

   
