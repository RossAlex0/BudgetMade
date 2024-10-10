import { loginStyle } from "@/src/style/auth/login";
import {
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "@/src/style/colors";
import Button from "@/src/component/Button";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function Login() {
  const logo = require("../../../assets/logo/logo.png");

  const [userLog, setUserLog] = useState({ email: "", password: "" });
  const [isSecure, setIsSecure] = useState(true);
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
        <TextInput
          value={userLog.email}
          placeholder="Adresse Email"
          returnKeyType="done"
          onFocus={() => setIsFocuse(true)}
          onSubmitEditing={() => setIsFocuse(false)}
          onChangeText={(value) => setUserLog({ ...userLog, email: value })}
          style={loginStyle.login_body_input}
        />
        <View style={loginStyle.login_body_boxInput}>
          <TextInput
            value={userLog.password}
            placeholder="Mot de passe"
            returnKeyType="done"
            secureTextEntry={isSecure}
            onFocus={() => setIsFocuse(true)}
            onSubmitEditing={() => setIsFocuse(false)}
            onChangeText={(value) =>
              setUserLog({ ...userLog, password: value })
            }
            style={[loginStyle.login_body_input, { marginBottom: 12 }]}
          />
          <Pressable
            onPress={() => setIsSecure(!isSecure)}
            style={loginStyle.login_body_secure}
          >
            <Icon
              name={isSecure ? "eye-outline" : "eye-off-outline"}
              size={28}
            />
          </Pressable>
        </View>
        {!isFocuse && (
          <>
            <Button text="Se connecter" theme="purple" />
            <Button text="Nouveau ? Créer un compte" theme="white" />
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
