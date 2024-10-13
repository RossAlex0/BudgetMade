import { Text, View } from "react-native";
import { useContext, useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import Button from "../Button";
import Input from "../Input";

import { AccountStyle, SpendingAccountStyle } from "@/src/style/auth/account";
import { UserCatInterface } from "@/src/service/type/apiType/userCategoryType";
import { getUserById, getUserCategoryById } from "@/src/service/request/get";
import { UserContext } from "@/src/service/context/UserContext";
import { UserContextInterface } from "@/src/service/type/contextType/userType";
import { SpendInterface } from "@/src/service/type/authType/spendType";
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
  const [spend, setSpend] = useState<SpendInterface | undefined>();
  const [favorisData, setFavorisData] = useState<
    UserCatInterface[] | undefined
  >();
  console.info(userLog);
  useEffect(() => {
    if (userLog) {
      getUserCategoryById(userLog.id, favorisData, setFavorisData);
    }
  }, []);

  const HandleConfirmCap = () => {
    if (userLog) {
      getUserById(userLog.id, setUserLog);
    }
    if (spend && userLog) {
      Object.values(spend).forEach((spendCat) =>
        putUserCategory(userLog.id, spendCat.value, spendCat.id)
      );
      router.replace("/(tabs)");
    }
  };
  return (
    <>
      <View style={AccountStyle.account_body}>
        <Text style={SpendingAccountStyle.title}>
          Dernière étape ! Indiquez le plafond pour chaque catégorie
        </Text>
        <View style={SpendingAccountStyle.body}>
          {favorisData?.map((category) => (
            <View
              key={category.category_id}
              style={SpendingAccountStyle.body_element}
            >
              <Icon name={category.icon} color={colors.gray_dark} size={20} />
              <Text style={SpendingAccountStyle.body_element_text}>
                {category.category_name}
              </Text>
              <View style={SpendingAccountStyle.body_element_box}>
                <Input
                  tools={{
                    value:
                      `${spend?.[category.category_id]?.value}` === "undefined"
                        ? ""
                        : `${spend?.[category.category_id]?.value}`,
                    placeholder: "Plafond",
                    keyType: "done",
                    keyboardType: "numeric",
                    secure: false,
                    setOnChange: (value) =>
                      setSpend({
                        ...spend,
                        [category.category_id]: {
                          value,
                          id: category.category_id,
                        },
                      }),
                    style: SpendingAccountStyle.body_element_boxInput,
                  }}
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
        </View>
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
