import { Text, View } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import Button from "../Button";
import Input from "../Input";

import { AccountStyle, SpendingAccountStyle } from "@/src/style/auth/account";

export default function SpendingAccount({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (counter: number) => void;
}) {
  const [spend, setSpend] = useState("");
  return (
    <>
      <View style={AccountStyle.account_body}>
        <Text style={SpendingAccountStyle.title}>
          Dernière étape ! Indiquez le plafond pour chaque catégorie
        </Text>
        <View style={SpendingAccountStyle.body}>
          <View style={SpendingAccountStyle.body_element}>
            <Icon name="home-outline" size={20} />
            <Text style={SpendingAccountStyle.body_element_text}>Logement</Text>
            <View style={SpendingAccountStyle.body_element_box}>
              <Input
                tools={{
                  value: spend,
                  placeholder: "Plafond",
                  keyType: "done",
                  keyboardType: "numeric",
                  secure: false,
                  setOnChange: setSpend,
                  style: SpendingAccountStyle.body_element_boxInput,
                }}
              />
              <Icon
                name="logo-euro"
                size={18}
                style={SpendingAccountStyle.body_element_boxIcon}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={AccountStyle.account_footer}>
        <Button
          text="Confirmer"
          theme="purple"
          click={() => setCounter(counter + 1)}
        />
        {counter !== 1 && (
          <Button
            text="Plus tard"
            theme="white"
            click={() => setCounter(counter - 1)}
          />
        )}
      </View>
    </>
  );
}
