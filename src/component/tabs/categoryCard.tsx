import { View, Text } from "react-native";
import { useEffect, useState } from "react";

import Icon from "react-native-vector-icons/Ionicons";

import expensePercent from "@/src/service/utils/expenseComparCap";
import { CategoriesJoinInterface } from "@/src/service/type/apiType/userCatJoinCat";

import { HomeStyle } from "@/src/style/tabs/home";
import { postExpenseBycategory } from "@/src/service/request/post";

export default function CategoryCard({
  category,
}: {
  category: CategoriesJoinInterface;
}) {
  const [widthExpense, setWidthExpense] = useState<number>(0);
  const [categoryExpense, setCategoryExpense] = useState<any>();
  useEffect(() => {
    (async () => {
      const expense = await postExpenseBycategory(
        category.user_id,
        category.category_id
      );
      setCategoryExpense(expense[0].total_amount);
      const width = await expensePercent(
        category.user_id,
        category.category_id,
        category.cap
      );
      setWidthExpense(width);
    })();
  }, [category]);

  return (
    <View style={[HomeStyle.map, { backgroundColor: category.colorbg }]}>
      <View style={HomeStyle.map_element}>
        <View style={HomeStyle.container}>
          <Text
            style={HomeStyle.container_textname}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {category.name}
          </Text>
          <Text style={HomeStyle.container_text}>{categoryExpense} €</Text>
        </View>
        <View style={[HomeStyle.cap, { backgroundColor: category.colormid }]}>
          <View
            style={[
              HomeStyle.range,
              { backgroundColor: category.color, width: `${widthExpense}%` },
            ]}
          />
        </View>
      </View>
      <Icon name={category.icon} color={category.color} size={24} />
    </View>
  );
}
