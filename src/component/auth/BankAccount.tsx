import { View, Text, Image } from "react-native";
import Button from "../Button";
import {
  AccountStyle,
  BankAccountStyle,
  BudgetAccountStyle,
} from "@/src/style/auth/account";
import { useContext } from "react";
import { UserContext } from "@/src/service/context/UserContext";
import { UserContextInterface } from "@/src/service/type/contextType/userType";

export default function BankAccount({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (counter: number) => void;
}) {
  const bank = require("../../../assets/images/bank.png");
  const { userLog } = useContext(UserContext) as UserContextInterface;

  return (
    <>
      <View style={AccountStyle.account_body}>
        <Image source={bank} style={BankAccountStyle.image} />
        <Text style={BudgetAccountStyle.title}>
          Bienvenue {userLog?.name} !
        </Text>
        <Text style={BudgetAccountStyle.text}>
          Pour bien commencer, synchronisez vos données bancaires enregistrées
          sur votre téléphone pour catégoriser vos dépenses en toute sécurité.
          Ne vous inquiétez pas, nous utilisons uniquement ces informations pour
          suivre vos dépenses.
        </Text>
      </View>
      <View style={AccountStyle.account_footer}>
        <Button
          text="Synchroniser les données"
          theme="purple"
          click={() => setCounter(counter + 1)}
        />
        <Button
          text="Plus tard"
          theme="white"
          click={() => setCounter(counter - 1)}
        />
      </View>
    </>
  );
}
