import { Text, View, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";

import BudgetDetails from "@/src/component/tabs/BudgetDetails";

import { BudgetStyle } from "@/src/style/tabs/budget";
import BudgetCategory from "@/src/component/tabs/BudgetCategory";

export default function Budget() {
  const [filterTabs, setFilterTabs] = useState("details");
  return (
    <View style={BudgetStyle.budget}>
      <View style={BudgetStyle.budget_header}>
        <Text style={BudgetStyle.budget_header_text}>Portefeuille</Text>
        <View style={BudgetStyle.budget_header_nav}>
          <Pressable
            style={BudgetStyle.nav_pressable}
            onPress={() => setFilterTabs("details")}
          >
            <Text
              style={
                filterTabs === "details"
                  ? [
                      BudgetStyle.nav_pressable_text,
                      {
                        textDecorationLine: "underline",
                      },
                    ]
                  : BudgetStyle.nav_pressable_text
              }
            >
              Détails
            </Text>
          </Pressable>
          <Pressable
            style={BudgetStyle.nav_pressable}
            onPress={() => setFilterTabs("category")}
          >
            <Text
              style={
                filterTabs === "category"
                  ? [
                      BudgetStyle.nav_pressable_text,
                      {
                        textDecorationLine: "underline",
                      },
                    ]
                  : BudgetStyle.nav_pressable_text
              }
            >
              Catégorie
            </Text>
          </Pressable>
        </View>
      </View>
      <ScrollView style={BudgetStyle.body}>
        {filterTabs === "details" ? <BudgetDetails /> : <BudgetCategory />}
      </ScrollView>
    </View>
  );
}
