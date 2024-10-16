import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import { useContext, useState } from "react";

import Input from "@/src/component/Input";
import Button from "@/src/component/Button";

import { postSignToken, postUser } from "@/src/service/request/post";

import { colors } from "@/src/style/colors";
import { registerStyle } from "@/src/style/auth/register";
import { UserContext } from "@/src/service/context/UserContext";
import { UserContextInterface } from "@/src/service/type/contextType/userType";

export default function Register() {
  const logo = require("../../../assets/logo/logo.png");

  const { reload, setReload } = useContext(UserContext) as UserContextInterface;

  const [isFocuse, setIsFocuse] = useState(false);
  const [userSignUp, setUserSignUp] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const HandleCreateUser = async () => {
    if (
      userSignUp.password === confirmPassword &&
      userSignUp.email !== "" &&
      userSignUp.name !== ""
    ) {
      await postUser(userSignUp);
      await postSignToken(userSignUp.email);
      setReload(!reload);
      router.push("/auth/Account");
    }
  };

  return (
    <View style={registerStyle.register}>
      <LinearGradient
        colors={colors.gradient_color}
        start={{ x: 0.8, y: 0.8 }}
        end={{ x: 0, y: 0 }}
        style={registerStyle.register_header}
      >
        <Image source={logo} style={registerStyle.register_header_image} />
        <Text style={registerStyle.register_header_title}>BudgetMade</Text>
        <Text style={registerStyle.register_header_text}>
          Gérez votre budget en toute simplicité.
        </Text>
      </LinearGradient>
      <View style={registerStyle.register_body}>
        <Text style={registerStyle.register_body_text}>Créer un compte</Text>
        <Input
          tools={{
            value: userSignUp.name,
            placeholder: "Prénom",
            keyType: "done",
            secure: false,
            setIsFocuse: setIsFocuse,
            setOnChange: (value) =>
              setUserSignUp({ ...userSignUp, name: value }),
            style: registerStyle.register_body_input,
          }}
        />
        <Input
          tools={{
            value: userSignUp.email,
            placeholder: "Adresse Email",
            keyType: "done",
            keyboardType: "email-address",
            secure: false,
            setIsFocuse: setIsFocuse,
            setOnChange: (value) =>
              setUserSignUp({ ...userSignUp, email: value }),
            style: registerStyle.register_body_input,
          }}
        />
        <View style={registerStyle.register_body_inputBox}>
          <Input
            tools={{
              value: userSignUp.password,
              placeholder: "Mot de passe",
              keyType: "done",
              secure: true,
              setIsFocuse: setIsFocuse,
              setOnChange: (value) =>
                setUserSignUp({ ...userSignUp, password: value }),
              style: registerStyle.register_body_input,
            }}
          />
        </View>
        <View
          style={[registerStyle.register_body_inputBox, { marginBottom: 16 }]}
        >
          <Input
            tools={{
              value: confirmPassword,
              placeholder: "Confirmation de votre mot de passe",
              keyType: "done",
              secure: true,
              setIsFocuse: setIsFocuse,
              setOnChange: (value) => setConfirmPassword(value),
              style: registerStyle.register_body_input,
            }}
          />
        </View>
        <Button
          text="Créer un compte"
          theme="purple"
          click={HandleCreateUser}
        />
        <Button
          text="Déjà un compte ? Connectez-vous"
          theme="white"
          click={() => router.back()}
        />
      </View>
    </View>
  );
}
