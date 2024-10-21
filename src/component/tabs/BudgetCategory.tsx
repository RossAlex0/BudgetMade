import { UserContext } from "@/src/service/context/UserContext";
import { getCategoriesNotIn } from "@/src/service/request/get";
import { CategoriesInterface } from "@/src/service/type/apiType/categoryType";
import { UserContextInterface } from "@/src/service/type/contextType/userType";
import { CategoryAccountStyle } from "@/src/style/auth/account";
import { colors } from "@/src/style/colors";
import { BudgetCatsStyle } from "@/src/style/tabs/budget";
import { useContext, useEffect, useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

export default function BudgetCategory() {
  const { userLog } = useContext(UserContext) as UserContextInterface;
  const [seeAdd, setSeeAdd] = useState(false);
  const [seeUpdate, setSeeUpdate] = useState(false);
  const [categoriesData, setCategoriesData] = useState<
    CategoriesInterface[] | undefined
  >();

  const [categoriesSelect, setCategoriesSelect] = useState<number[]>([]);

  const HandleClickCategory = (id: number) => {
    if (categoriesSelect.includes(id)) {
      setCategoriesSelect(
        categoriesSelect.filter((categoryId) => categoryId !== id)
      );
    } else {
      setCategoriesSelect([...categoriesSelect, id]);
    }
  };
  console.info(categoriesData);
  useEffect(() => {
    if (userLog) {
      getCategoriesNotIn(userLog.id, setCategoriesData);
    }
  }, []);
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
          <ScrollView style={{ flex: 1, marginTop: 8, paddingHorizontal: 8 }}>
            {categoriesData?.map((category) => (
              <Pressable
                key={category.id}
                style={
                  categoriesSelect.includes(category.id)
                    ? [
                        CategoryAccountStyle.categories_element,
                        { borderColor: "#8516D1", backgroundColor: "#FAF6FD" },
                      ]
                    : CategoryAccountStyle.categories_element
                }
                onPress={() => HandleClickCategory(category.id)}
              >
                <Text style={CategoryAccountStyle.categories_element_title}>
                  {category.name}
                </Text>
                <Icon
                  name={category.icon}
                  size={20}
                  color={
                    categoriesSelect.includes(category.id)
                      ? "#8516D1"
                      : colors.gray_dark
                  }
                  style={CategoryAccountStyle.categories_element_icon}
                />
              </Pressable>
            ))}
          </ScrollView>
        )}
      </View>
      {/* ######## */}
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
