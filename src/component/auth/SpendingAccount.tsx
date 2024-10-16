import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useContext, useEffect, useRef, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import Button from "../Button";

import { AccountStyle, SpendingAccountStyle } from "@/src/style/auth/account";
import { UserCatInterface } from "@/src/service/type/apiType/userCategoryType";
import { getUserById, getUserCategoryById } from "@/src/service/request/get";
import { UserContext } from "@/src/service/context/UserContext";
import { UserContextInterface } from "@/src/service/type/contextType/userType";
import { putUserCategory } from "@/src/service/request/put";
import { colors } from "@/src/style/colors";
import { router } from "expo-router";

export default function SpendingAccount({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (counter: number) => void;
}) {
  const { userLog, setUserLog } = useContext(
    UserContext
  ) as UserContextInterface;

  const [favorisData, setFavorisData] = useState<UserCatInterface[]>();
  const [capCategories, setCapCategories] = useState<any[]>([]);

  useEffect(() => {
    if (userLog) {
      getUserCategoryById(userLog.id, favorisData, setFavorisData);
    }
  }, [userLog]);

  const HandleConfirmCap = async () => {
    if (userLog) {
      const status = await putUserCategory(userLog.id, capCategories);
      await getUserById(userLog.id, setUserLog);
      if (status) {
        router.push("/tabs/");
      }
    }
  };

  return (
    <>
      <View style={AccountStyle.account_body}>
        <Text style={SpendingAccountStyle.title}>
          Dernière étape ! Indiquez le plafond pour chaque catégorie
        </Text>
        <ScrollView style={SpendingAccountStyle.body}>
          {favorisData?.map((category, index) => (
            <View key={index} style={SpendingAccountStyle.body_element}>
              <Icon name={category.icon} color={colors.gray_dark} size={20} />
              <Text style={SpendingAccountStyle.body_element_text}>
                {category.category_name}
              </Text>
              <View style={SpendingAccountStyle.body_element_box}>
                <TextInput
                  placeholder="Plafond"
                  returnKeyType="done"
                  keyboardType="numeric"
                  secureTextEntry={false}
                  onChangeText={(value) => {
                    setCapCategories(
                      capCategories?.find(
                        (cap) => cap.id === category.category_id
                      )
                        ? capCategories.map((cap) =>
                            cap.id === category.category_id
                              ? { ...cap, value }
                              : cap
                          )
                        : [
                            ...capCategories,
                            { id: category.category_id, value },
                          ]
                    );
                  }}
                  style={SpendingAccountStyle.body_element_boxInput}
                />
                <Icon
                  name="logo-euro"
                  size={18}
                  color={colors.gray_dark}
                  style={SpendingAccountStyle.body_element_boxIcon}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={AccountStyle.account_footer}>
        <Button text="Confirmer" theme="purple" click={HandleConfirmCap} />
        <Button
          text="Plus tard"
          theme="white"
          click={() => setCounter(counter - 1)}
        />
      </View>
    </>
  );
}
