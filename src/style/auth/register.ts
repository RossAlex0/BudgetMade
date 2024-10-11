import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const registerStyle = StyleSheet.create({
  register: {
    flex: 1,
    backgroundColor: colors.background_color,
  },

  register_header: {
    height: "35%",
    width: "160%",
    marginLeft: "-30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
    padding: 42,
    borderBottomLeftRadius: 400,
    borderBottomRightRadius: 400,
  },
  register_header_image: {
    height: 112,
    width: 112,
  },
  register_header_title: {
    fontSize: 28,
    color: colors.white_color,
    fontFamily: "Regular",
  },
  register_header_text: {
    fontFamily: "Regular",
    color: colors.white_color,
    marginTop: -8,
  },

  register_body: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  register_body_text: {
    fontFamily: "Bold",
    fontSize: 20,
  },
  register_body_input: {
    height: 48,
    width: "80%",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.gray_color,
    borderRadius: 8,
    backgroundColor: colors.white_color,
  },
  register_body_inputBox: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});
