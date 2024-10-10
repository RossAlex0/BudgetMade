import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>HOME</Text>
      <Link href="/Auth/" style={{ marginTop: 40 }}>
        Login
      </Link>
    </View>
  );
}
