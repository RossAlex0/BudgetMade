import { colors } from "@/src/style/colors";
import { BudgetCatsStyle } from "@/src/style/tabs/budget";
import { useState } from "react";
import { View, Text, Pressable } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

export default function BudgetCategory() {
  const [seeAdd, setSeeAdd] = useState(false);
  const [seeUpdate, setSeeUpdate] = useState(false);
  return (
    <>
      <View style={{ marginTop: 24 }}>
        <Pressable
          onPress={() => {
            setSeeAdd(!seeAdd);
            setSeeUpdate(false);
          }}
          style={BudgetCatsStyle.container_header}
        >
          <Text style={BudgetCatsStyle.container_header_text}>
            Ajouter des catégories
          </Text>
          <Icon
            name={seeAdd ? "chevron-up-outline" : "chevron-down-outline"}
            size={22}
          />
        </Pressable>
        {seeAdd && (
          <View style={{ backgroundColor: colors.gray_color, height: 200 }}>
            <Text>les cat</Text>
          </View>
        )}
      </View>
      <View style={{ marginTop: 24 }}>
        <Pressable
          onPress={() => {
            setSeeUpdate(!seeUpdate);
            setSeeAdd(false);
          }}
          style={BudgetCatsStyle.container_header}
        >
          <Text style={BudgetCatsStyle.container_header_text}>
            Modifier une catégorie
          </Text>
          <Icon
            name={seeUpdate ? "chevron-up-outline" : "chevron-down-outline"}
            size={22}
          />
        </Pressable>
        {seeUpdate && (
          <View style={{ backgroundColor: colors.gray_color, height: 200 }}>
            <Text>les up</Text>
          </View>
        )}
      </View>
    </>
  );
}
