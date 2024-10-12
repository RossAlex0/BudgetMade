import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Input from "../Input";

import { getAllCategory } from "@/src/service/request/get";
import { postCategoryQuery } from "@/src/service/request/post";
import { CategoriesInterface } from "@/src/service/type/apiType/categoryType";

import LottieView from "lottie-react-native";
import { CategoryAccountStyle } from "@/src/style/auth/account";
import { colors } from "@/src/style/colors";

export default function CategoryAccount() {
  const [categoriesData, setCategoriesData] = useState<
    CategoriesInterface[] | undefined
  >();
  const [category, setcategory] = useState("");

  useEffect(() => {
    postCategoryQuery(setCategoriesData, category);
    if (category.length <= 0) {
      getAllCategory(setCategoriesData);
    }
  }, [category]);
  return (
    <>
      <Text style={CategoryAccountStyle.title}>
        Sélectionnez vos catégories de dépenses
      </Text>
      <View style={CategoryAccountStyle.box}>
        <Input
          tools={{
            value: category,
            placeholder: "Rechercher une catégorie",
            keyType: "search",
            secure: false,
            setOnChange: setcategory,
            style: CategoryAccountStyle.box_input,
          }}
        />
        <Icon
          name="search-outline"
          size={24}
          style={CategoryAccountStyle.box_icon}
        />
      </View>
      <Text style={CategoryAccountStyle.text}>Toutes les catégories</Text>
      <ScrollView style={CategoryAccountStyle.categories}>
        {categoriesData?.map((category) => (
          <Pressable
            key={category.id}
            style={CategoryAccountStyle.categories_element}
          >
            <Text style={CategoryAccountStyle.categories_element_title}>
              {category.name}
            </Text>
            <Text style={CategoryAccountStyle.categories_element_text}>
              {category.description}
            </Text>
            <Icon
              name={category.icon}
              size={20}
              color={colors.gray_dark}
              style={CategoryAccountStyle.categories_element_icon}
            />
          </Pressable>
        ))}
        {category.length > 0 && categoriesData?.length === 0 && (
          <LottieView
            source={require("../../../assets/lottie/notFound.json")}
            autoPlay
            loop
            style={CategoryAccountStyle.categories_element_lottie}
          />
        )}
      </ScrollView>
    </>
  );
}
