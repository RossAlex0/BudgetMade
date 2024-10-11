import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import Icon from "react-native-vector-icons/Ionicons";
import Button from "@/src/component/Button";

import { colors } from "@/src/style/colors";
import { loginStyle } from "@/src/style/auth/login";
import Input from "@/src/component/Input";

export default function Login() {
  const logo = require("../../../assets/logo/logo.png");

  const [userLog, setUserLog] = useState({ email: "", password: "" });
  const [isFocuse, setIsFocuse] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={-50}
      style={loginStyle.login}
    >
      <LinearGradient
        colors={colors.gradient_color}
        start={{ x: 0.8, y: 0.8 }}
        end={{ x: 0, y: 0 }}
        style={loginStyle.login_header}
      >
        <Image source={logo} />
        <Text style={loginStyle.login_header_title}>BudgetMade</Text>
        <Text style={loginStyle.login_header_text}>
          Gérez votre budget en toute simplicité.
        </Text>
      </LinearGradient>
      <View style={loginStyle.login_body}>
        <Text style={loginStyle.login_body_title}>Connexion</Text>
        <Input
          tools={{
            value: userLog.email,
            placeholder: "Adresse Email",
            keyType: "done",
            keyboardType: "email-address",
            secure: false,
            setIsFocuse: setIsFocuse,
            setOnChange: (value) => setUserLog({ ...userLog, email: value }),
            style: loginStyle.login_body_input,
          }}
        />
        <View style={loginStyle.login_body_boxInput}>
          <Input
            tools={{
              value: userLog.password,
              placeholder: "Mot de passe",
              keyType: "done",
              secure: true,
              setIsFocuse: setIsFocuse,
              setOnChange: (value) =>
                setUserLog({ ...userLog, password: value }),
              style: [loginStyle.login_body_input, { marginBottom: 12 }],
            }}
          />
        </View>
        {!isFocuse && (
          <>
            <Button text="Se connecter" theme="purple" />
            <Button
              text="Nouveau ? Créer un compte"
              theme="white"
              click={() => router.push("/Auth/Register")}
            />
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
