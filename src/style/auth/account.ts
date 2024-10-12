import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const AccountStyle = StyleSheet.create({
  account: {
    flex: 1,
    backgroundColor: colors.background_color,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 80,
  },
  account_header: {
    height: "7%",
    width: "100%",
    paddingHorizontal: 32,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 8,
  },
  account_header_bar: {
    height: 12,
    width: "100%",
    backgroundColor: "#F5DFEF",
    borderRadius: 16,
  },
  account_header_barAnim: {
    height: 12,
    width: "100%",
    borderRadius: 16,
  },
  account_header_text: {
    fontFamily: "Regular",
    color: colors.font_color,
  },

  account_body: {
    height: "73%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 12,
    alignItems: "center",
  },

  account_footer: {
    height: 150,
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 16,
    backgroundColor: colors.background_color,
    paddingTop: 16,
    borderTopColor: colors.gray_color,
    borderTopWidth: 1,
    zIndex: 1,
  },
});

export const BudgetAccountStyle = StyleSheet.create({
  image: {
    marginBottom: 56,
  },
  title: {
    fontFamily: "Bold",
    fontSize: 26,
    color: colors.font_color,
  },
  text: {
    width: "80%",
    fontFamily: "Regular",
    textAlign: "center",
    color: colors.font_color,
    marginBottom: 48,
  },
  box: {
    height: 48,
    width: "80%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.gray_color,
    borderRadius: 12,
    backgroundColor: colors.white_color,
  },
  box_input: {
    width: "100%",
    paddingHorizontal: 16,
    fontFamily: "Regular",
    paddingTop: 4,
  },
  box_icon: {
    position: "absolute",
    right: "5%",
    opacity: 0.7,
  },
  error: {
    fontFamily: "Regular",
    color: "red",
  },
});

export const CategoryAccountStyle = StyleSheet.create({
  title: {
    fontFamily: "Bold",
    fontSize: 17,
    textAlign: "center",
    width: "60%",
  },
  box: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.gray_color,
    borderRadius: 8,
    width: "80%",
    paddingLeft: 40,
    display: "flex",
    justifyContent: "center",
  },
  box_input: {
    fontFamily: "Regular",
    paddingTop: 4,
  },
  box_icon: {
    position: "absolute",
    marginLeft: 8,
    opacity: 0.7,
  },
  text: {
    fontFamily: "Regular",
    alignSelf: "flex-start",
    paddingLeft: "10%",
  },
  categories: {
    height: "auto",
    width: "100%",
    paddingHorizontal: "10%",
    display: "flex",
    flexDirection: "column",
  },
  categories_element: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.gray_color,
    borderRadius: 8,
    paddingLeft: 48,
    paddingRight: 8,
    paddingVertical: 8,
    marginBottom: 16,
  },
  categories_element_lottie: {
    margin: "auto",
    width: 300,
    height: 300,
  },
  categories_element_title: {
    fontFamily: "SemiBold",
    fontSize: 17,
  },
  categories_element_text: {
    fontFamily: "Regular",
    color: colors.gray_dark,
  },
  categories_element_icon: {
    position: "absolute",
    top: 12,
    left: 8,
  },
});

export const SpendingAccountStyle = StyleSheet.create({
  title: {
    width: "80%",
    fontFamily: "Bold",
    textAlign: "center",
    fontSize: 17,
  },
  body: {
    height: "auto",
    width: "80%",
  },
  body_element: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_color,
    paddingVertical: 16,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  body_element_text: {
    flex: 1,
    fontFamily: "Bold",
    paddingTop: 4,
    marginLeft: 12,
  },
  body_element_box: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.gray_color,
    borderRadius: 8,
    height: 48,
    width: "40%",
  },
  body_element_boxInput: {
    width: "100%",
    paddingLeft: 8,
  },
  body_element_boxIcon: {
    position: "absolute",
    right: 8,
  },
});
