import { UserContext } from "@/src/service/context/UserContext";
import { getUserJoinCategoryById } from "@/src/service/request/get";
import { CategoriesJoinInterface } from "@/src/service/type/apiType/userCatJoinCat";
import { UserContextInterface } from "@/src/service/type/contextType/userType";
import { Link, router } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import { HomeStyle } from "@/src/style/tabs/home";

export default function Home() {
  const { userLog } = useContext(UserContext) as UserContextInterface;
  const [categoriesData, setCategoriesData] = useState<
    CategoriesJoinInterface[] | undefined
  >();

  useEffect(() => {
    if (userLog) {
      getUserJoinCategoryById(userLog.id, setCategoriesData);
    }
  }, []);
  return (
    <View style={HomeStyle.home}>
      <View style={HomeStyle.home_header}>
        <Text style={HomeStyle.home_header_text}>
          Bonjour {userLog?.name} 👋
        </Text>
        <Text style={HomeStyle.home_header_text}>Détail de vos dépenses</Text>
      </View>
      <ScrollView style={HomeStyle.home_body}>
        {categoriesData?.map((category) => (
          <View
            key={category.name}
            style={[HomeStyle.map, { backgroundColor: category.colorbg }]}
          >
            <View style={HomeStyle.map_element}>
              <View style={HomeStyle.container}>
                <Text
                  style={HomeStyle.container_textname}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {category.name}
                </Text>
                <Text style={HomeStyle.container_text}>{category.cap} €</Text>
              </View>
              <View
                style={[HomeStyle.cap, { backgroundColor: category.colormid }]}
              >
                <View
                  style={[HomeStyle.range, { backgroundColor: category.color }]}
                />
              </View>
            </View>
            <Icon name={category.icon} color={category.color} size={24} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
