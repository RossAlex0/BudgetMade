import { useEffect, useRef, useState } from "react";
import { Animated, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import BudgetAccount from "@/src/component/auth/BudgetAccount";
import CategoryAccount from "@/src/component/auth/CategoryAccount";
import SpendingAccount from "@/src/component/auth/SpendingAccount";

import { AccountStyle } from "@/src/style/auth/account";
import { colors } from "@/src/style/colors";
import BankAccount from "@/src/component/auth/BankAccount";

export default function AccountConfig() {
  const [counter, setCounter] = useState(1);

  const widthAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: counter * 25,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [counter]);

  const animatedStyle = {
    width: widthAnim.interpolate({
      inputRange: [0, 100],
      outputRange: ["0%", "100%"],
    }),
  };
  return (
    <View style={AccountStyle.account}>
      <View style={AccountStyle.account_header}>
        <View style={AccountStyle.account_header_bar}>
          <Animated.View style={[animatedStyle, { height: 12 }]}>
            <LinearGradient
              colors={colors.gradient_color}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={AccountStyle.account_header_barAnim}
            />
          </Animated.View>
        </View>
        <Text style={AccountStyle.account_header_text}>Étapes {counter}/4</Text>
      </View>
      {counter === 1 && (
        <BankAccount counter={counter} setCounter={setCounter} />
      )}
      {counter === 2 && (
        <BudgetAccount counter={counter} setCounter={setCounter} />
      )}
      {counter === 3 && (
        <CategoryAccount counter={counter} setCounter={setCounter} />
      )}
      {counter === 4 && (
        <SpendingAccount counter={counter} setCounter={setCounter} />
      )}
    </View>
  );
}
