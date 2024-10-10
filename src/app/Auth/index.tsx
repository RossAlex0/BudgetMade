import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Ma page de co</Text>
      <Link href="/Auth/Register" style={{ marginTop: 40, marginBottom: 40 }}>
        GO register
      </Link>
      <Pressable onPress={() => router.push("/")}>
        <Text>Retour</Text>
      </Pressable>
    </View>
  );
}
