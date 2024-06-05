import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  calendarContainer: {
    width: 375,
    height: 400,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginVertical: 15,
  },
  headerWrapper: {
    height: 110,
    padding: 25,
    justifyContent: "center-between",
    marginBottom: -30,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  arrow: {
    width: 42,
    height: 10.31,
    resizeMode: "contain",
  },
  monthText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  daysOfWeekContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  dayOfWeekText: {
    fontSize: 14,
    color: "#6785B2",
    fontWeight: "400",
    textAlign: "center",
    flex: 1,
  },
  weekContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  dateTouchable: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    height: "auto",
  },
  dateContainer: {
    width: 40,
    height: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  highlightedDateContainer: {
    backgroundColor: "#B5BECC",
    borderRadius: 1,
    // width: 40,
    // height: 30,
  },
  dateText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: 18, // 調整行距
  },
  highlightedDateText: {
    color: "#FFF",
  },
  nonCurrentMonthDate: {
    color: "#BBBBBB",
  },
  todayDate: {
    position: "relative",
  },
  todayMarker: {
    width: 25,
    height: 3,
    backgroundColor: "#BBBBBB",
    marginTop: 2,
  },
});

