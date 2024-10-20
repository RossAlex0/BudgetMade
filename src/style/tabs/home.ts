import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const HomeStyle = StyleSheet.create({
  home: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 48,
    backgroundColor: colors.background_color,
  },
  home_header: {
    height: "30%",
  },
  home_header_text: {
    fontFamily: "SemiBold",
    fontSize: 18,
    marginBottom: 4,
    color: colors.font_color,
  },
  home_body: {
    height: "auto",
    paddingTop: 16,
  },

  map: {
    height: 80,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 16,
    borderRadius: 8,
  },
  map_element: {
    height: "70%",
    width: "70%",
    display: "flex",
    gap: 8,
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container_textname: {
    width: "70%",
    fontFamily: "SemiBold",
    fontSize: 15,
  },
  container_text: {
    fontFamily: "Regular",
    fontSize: 15,
  },
  cap: {
    height: 10,
    width: "100%",
    borderRadius: 24,
  },
  range: {
    height: "100%",
    borderRadius: 24,
  },
  icon: {
    margin: "auto",
  },
});

export const Chartstyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  chartContainer: {
    width: 250,
    height: 125,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
  },
  halfRing: {
    transform: [{ rotate: "-90deg" }],
    borderRadius: 240,
  },
  text: {
    fontFamily: "SemiBold",
    fontSize: 26,
    position: "absolute",
    top: 80,
  },
});
