import { Text, Image, View } from "react-native";
import { useContext, useState } from "react";

import { putUser } from "@/src/service/request/put";
import { UserContext } from "@/src/service/context/UserContext";
import { UserContextInterface } from "@/src/service/type/contextType/userType";

import Icon from "react-native-vector-icons/Ionicons";
import Input from "../Input";
import Button from "../Button";

import { AccountStyle, BudgetAccountStyle } from "@/src/style/auth/account";

export default function BudgetAccount({
  counter,
  setCounter,
}: {
  counter: number;
  setCounter: (counter: number) => void;
}) {
  const money = require("../../../assets/images/money.png");
  const { userLog } = useContext(UserContext) as UserContextInterface;

  const [salary, setSalary] = useState<string | undefined>();
  const [msgError, setMsgError] = useState<string | undefined>();

  const HandleConfirmSalary = async () => {
    if (userLog && salary) {
      const response = await putUser(userLog.id, parseInt(salary));
      if (response) {
        setCounter(counter + 1);
      } else {
        setMsgError("Veuillez réessayer dans un instant");
        setTimeout(() => setMsgError(undefined), 4000);
      }
    } else {
      setMsgError("Veuillez saisir un montant");
      setTimeout(() => setMsgError(undefined), 4000);
    }
  };
  return (
    userLog && (
      <>
        <View style={AccountStyle.account_body}>
          <Image source={money} style={BudgetAccountStyle.image} />
          <Text style={BudgetAccountStyle.title}>Budget mensuelle</Text>
          <Text style={BudgetAccountStyle.text}>
            Pour mieux gérer tes dépenses, nous avons besoin de connaître ton
            budget mensuelles totale.
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
            <Icon
              name="logo-euro"
              size={20}
              style={BudgetAccountStyle.box_icon}
            />
          </View>
          {msgError && <Text style={BudgetAccountStyle.error}>{msgError}</Text>}
        </View>
        <View style={AccountStyle.account_footer}>
          <Button text="Confirmer" theme="purple" click={HandleConfirmSalary} />
        </View>
      </>
    )
  );
}
