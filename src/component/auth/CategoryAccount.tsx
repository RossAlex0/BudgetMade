import { useContext, useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import LottieView from "lottie-react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Button from "../Button";
import Input from "../Input";

import { getAllCategory } from "@/src/service/request/get";
import {
  postCategoryQuery,
  postUserCategory,
} from "@/src/service/request/post";
import { CategoriesInterface } from "@/src/service/type/apiType/categoryType";

import { AccountStyle, CategoryAccountStyle } from "@/src/style/auth/account";
import { colors } from "@/src/style/colors";
import { UserContext } from "@/src/service/context/UserContext";
import { UserContextInterface } from "@/src/service/type/contextType/userType";

export default function CategoryAccount({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (counter: number) => void;
}) {
  const { userLog } = useContext(UserContext) as UserContextInterface;
  const [categoriesData, setCategoriesData] = useState<
    CategoriesInterface[] | undefined
  >();
  const [category, setcategory] = useState("");
  const [categoriesSelect, setCategoriesSelect] = useState<number[]>([]);

  useEffect(() => {
    postCategoryQuery(setCategoriesData, category);
    if (category.length <= 0) {
      getAllCategory(setCategoriesData);
    }
  }, [category]);

  const HandleClickCategory = (id: number) => {
    if (categoriesSelect.includes(id)) {
      setCategoriesSelect(
        categoriesSelect.filter((categoryId) => categoryId !== id)
      );
    } else {
      setCategoriesSelect([...categoriesSelect, id]);
    }
  };

  const HandlePostCategory = () => {
    if (userLog && categoriesSelect.length !== 0) {
      categoriesSelect?.map((category) =>
        postUserCategory(userLog.id, category)
      );
      setCounter(counter + 1);
    }
  };
  return (
    <>
      <View style={AccountStyle.account_body}>
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
              <Text style={CategoryAccountStyle.categories_element_text}>
                {category.description}
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
          {category.length > 0 && categoriesData?.length === 0 && (
            <LottieView
              source={require("../../../assets/lottie/notFound.json")}
              autoPlay
              loop
              style={CategoryAccountStyle.categories_element_lottie}
            />
          )}
        </ScrollView>
      </View>
      <View style={AccountStyle.account_footer}>
        <Button text="Confirmer" theme="purple" click={HandlePostCategory} />
        <Button
          text="Plus tard"
          theme="white"
          click={() => setCounter(counter - 1)}
        />
      </View>
    </>
  );
}
