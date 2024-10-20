import { Text, View, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";

import BudgetDetails from "@/src/component/tabs/BudgetDetails";

import { BudgetStyle } from "@/src/style/tabs/budget";

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
            <Text style={BudgetStyle.nav_pressable_text}>Détails</Text>
          </Pressable>
          <Pressable
            style={BudgetStyle.nav_pressable}
            onPress={() => setFilterTabs("category")}
          >
            <Text style={BudgetStyle.nav_pressable_text}>Catégorie</Text>
          </Pressable>
        </View>
      </View>
      <ScrollView style={BudgetStyle.body}>
        {filterTabs === "details" ? <BudgetDetails /> : ""}
      </ScrollView>
    </View>
  );
}
