import { StyleSheet } from "react-native";
import { colors } from "../colors";

export const BudgetStyle = StyleSheet.create({
  budget: {
    flex: 1,
    backgroundColor: colors.background_color,
  },
  budget_header: {
    height: "23%",
    display: "flex",
    flexDirection: "column",
    gap: 32,
    paddingVertical: 48,
    paddingHorizontal: 24,
  },
  budget_header_text: {
    fontFamily: "SemiBold",
    fontSize: 20,
    color: colors.font_color,
  },
  budget_header_nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  nav_pressable: {
    width: 104,
    paddingVertical: 6,
    backgroundColor: "#FFE8FD",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nav_pressable_text: {
    fontFamily: "SemiBold",
    paddingTop: 4,
    fontSize: 14.5,
    color: colors.primary_color,
  },
  body: {
    height: "auto",
    display: "flex",
    flexDirection: "column",
  },
});

export const BudgetDetailsStyle = StyleSheet.create({
  detail: {
    height: 60,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 12,
    borderBottomColor: colors.gray_color,
    borderBottomWidth: 1,
    marginTop: 12,
  },
  date: {
    height: 28,
    width: "100%",
    paddingHorizontal: 24,
    backgroundColor: colors.gray_color,
    display: "flex",
    justifyContent: "center",
  },
  date_text: {
    fontFamily: "Regular",
    color: colors.font_color,
  },

  detail_left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  detail_left_icon: {
    height: 32,
    width: 32,
    borderRadius: 4,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  detail_left_text: {},
  left_text_title: {
    fontFamily: "SemiBold",
    marginBottom: -2,
    color: colors.font_color,
  },
  left_text_text: {
    fontFamily: "Regular",
    color: colors.font_color,
  },
  detail_right: {},
});

export const BudgetCatsStyle = StyleSheet.create({
  container: {},
  container_header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 24,
    paddingHorizontal: 48,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray_color,
  },
  container_header_text: {
    fontFamily: "SemiBold",
  },
});
