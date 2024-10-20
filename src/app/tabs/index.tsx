import { useContext, useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";

import CategoryCard from "@/src/component/tabs/categoryCard";
import ArcChart from "@/src/component/tabs/ArcChart";

import { UserContext } from "@/src/service/context/UserContext";
import { CategoriesJoinInterface } from "@/src/service/type/apiType/userCatJoinCat";
import { UserContextInterface } from "@/src/service/type/contextType/userType";
import { getUserJoinCategoryById } from "@/src/service/request/get";

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
  }, [userLog]);
  return (
    <View style={HomeStyle.home}>
      <View style={HomeStyle.home_header}>
        <Text style={HomeStyle.home_header_text}>
          Bonjour {userLog?.name} 👋
        </Text>
        {categoriesData && <ArcChart categories={categoriesData} />}
        <Text style={HomeStyle.home_header_text}>Détail de vos dépenses</Text>
      </View>
      <ScrollView style={HomeStyle.home_body}>
        {categoriesData?.map((category) => (
          <CategoryCard category={category} key={category.name} />
        ))}
      </ScrollView>
    </View>
  );
}
