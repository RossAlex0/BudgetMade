import { useState } from "react";
import { Pressable, TextInput, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

import { Tools } from "../service/type/InputType";

export default function Input({ tools }: Tools) {
  const [isSecure, setIsSecure] = useState<boolean>(true);

  return (
    <>
      <TextInput
        value={tools.value}
        placeholder={tools.placeholder}
        placeholderTextColor="#B3BBC0"
        returnKeyType={tools.keyType}
        keyboardType={tools.keyboardType ? tools.keyboardType : "default"}
        secureTextEntry={tools.secure && isSecure}
        onFocus={() => tools.setIsFocuse && tools.setIsFocuse(true)}
        onSubmitEditing={() => tools.setIsFocuse && tools.setIsFocuse(false)}
        onChangeText={tools.setOnChange}
        style={tools.style}
      />
      {tools.secure && (
        <Pressable
          onPress={() => setIsSecure(!isSecure)}
          style={tools.icon ? tools.icon : inputStyle.icon}
        >
          <Icon
            name={!isSecure ? "eye-outline" : "eye-off-outline"}
            size={24}
          />
        </Pressable>
      )}
    </>
  );
}

const inputStyle = StyleSheet.create({
  icon: {
    position: "absolute",
    marginTop: 12,
    right: "15%",
  },
});
