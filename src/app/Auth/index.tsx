import { useContext, useState } from "react";
import {
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

import Button from "@/src/component/Button";
import Input from "@/src/component/Input";

import { postLogin } from "@/src/service/request/post";
import { UserContext } from "@/src/service/context/UserContext";
import { UserContextInterface } from "@/src/service/type/contextType/userType";

import { colors } from "@/src/style/colors";
import { loginStyle } from "@/src/style/auth/login";
import { postDataStorage } from "@/src/service/request/storage";

export default function Login() {
  const logo = require("../../../assets/logo/logo.png");
  const { reload, setReload } = useContext(UserContext) as UserContextInterface;

  const [userSign, setUserSign] = useState({ email: "", password: "" });
  const [isFocuse, setIsFocuse] = useState(false);

  const HandlePostLogin = async () => {
    if (userSign.email !== "" && userSign.email !== "") {
      const response = await postLogin(userSign);
      if (response) {
        await postDataStorage(response);
        setReload(!reload);
        router.replace("/tabs/");
      }
    }
  };

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
            value: userSign.email,
            placeholder: "Adresse Email",
            keyType: "done",
            keyboardType: "email-address",
            secure: false,
            setIsFocuse: setIsFocuse,
            setOnChange: (value) => setUserSign({ ...userSign, email: value }),
            style: loginStyle.login_body_input,
          }}
        />
        <View style={loginStyle.login_body_boxInput}>
          <Input
            tools={{
              value: userSign.password,
              placeholder: "Mot de passe",
              keyType: "done",
              secure: true,
              setIsFocuse: setIsFocuse,
              setOnChange: (value) =>
                setUserSign({ ...userSign, password: value }),
              style: [loginStyle.login_body_input, { marginBottom: 12 }],
            }}
          />
        </View>
        {!isFocuse && (
          <>
            <Button
              text="Se connecter"
              theme="purple"
              click={HandlePostLogin}
            />
            <Button
              text="Nouveau ? Créer un compte"
              theme="white"
              click={() => router.push("/auth/Register")}
            />
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
