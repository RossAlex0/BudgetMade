import { Text, Image, View } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

import Input from "../Input";

import { BudgetAccountStyle } from "@/src/style/auth/account";
import { colors } from "@/src/style/colors";

export default function BudgetAccount() {
  const money = require("../../../assets/images/money.png");

  const [salary, setSalary] = useState<string>("");

  return (
    <>
      <Image source={money} style={BudgetAccountStyle.image} />
      <Text style={BudgetAccountStyle.title}>Bienvenue Alex !</Text>
      <Text style={BudgetAccountStyle.text}>
        Pour mieux gérer tes dépenses, nous avons besoin de connaître ton budget
        mensuelles totale.
      </Text>
      <View style={BudgetAccountStyle.box}>
        <Input
          tools={{
            value: salary,
            placeholder: "Budget mensuelle total",
            keyType: "done",
            keyboardType: "numeric",
            secure: false,
            setOnChange: setSalary,
            style: BudgetAccountStyle.box_input,
          }}
        />
        <Icon name="logo-euro" size={20} style={BudgetAccountStyle.box_icon} />
      </View>
    </>
  );
}
