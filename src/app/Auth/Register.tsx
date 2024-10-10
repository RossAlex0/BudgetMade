import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Register() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Ma page d'enregistrement'</Text>
      <Pressable onPress={() => router.back()}>
        <Text>Retour</Text>
      </Pressable>
    </View>
  );
}
