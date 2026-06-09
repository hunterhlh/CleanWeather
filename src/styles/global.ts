import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  desc: {
    fontSize: 28,
    fontWeight: "600",
    fontFamily: "InterTight",
  },
  headerloctime: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 18,
    fontFamily: "JetBrainsMono",
    fontWeight: "400",
  },
  temperature: {
    fontSize: 148,
    fontFamily: "InterTight",
    fontWeight: "100",
  },
  rightNow: {
    fontSize: 15,
    fontFamily: "JetBrainsMono",
    fontWeight: "400",
  },
  feels: {
    fontSize: 18,
    fontFamily: "JetBrainsMono",
    fontWeight: "400",
  },
  dailyForecast: {
    fontSize: 19,
    fontFamily: "JetBrainsMono",
    fontWeight: "400",
  },
});
