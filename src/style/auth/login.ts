import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const loginStyle = StyleSheet.create({
  login: {
    flex: 1,
  },

  login_header: {
    height: "50%",
    width: "200%",
    marginLeft: "-50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 8,
    padding: 72,
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500,
    zIndex: 1,
  },
  login_header_title: {
    fontSize: 32,
    color: colors.white_color,
    fontFamily: "Regular",
  },
  login_header_text: {
    fontFamily: "Regular",
    color: colors.white_color,
    marginTop: -4,
  },

  login_body: {
    flex: 1,
    marginTop: -80,
    paddingTop: 40,
    backgroundColor: colors.background_color,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },
  login_body_title: {
    fontFamily: "Bold",
    color: colors.font_color,
    fontSize: 20,
  },
  login_body_input: {
    height: 48,
    width: "80%",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: colors.gray_color,
    borderRadius: 8,
    backgroundColor: colors.white_color,
  },
  login_body_boxInput: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  login_body_secure: {
    position: "absolute",
    marginTop: 10,
    right: "15%",
  },
});
