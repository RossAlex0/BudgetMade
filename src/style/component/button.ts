import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const buttonStyle = StyleSheet.create({
  pressable: {
    height: 48,
    width: "80%",
    backgroundColor: colors.primary_color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  text: {
    fontFamily: "Regular",
    fontSize: 16,
    paddingTop: 4,
  },
});
