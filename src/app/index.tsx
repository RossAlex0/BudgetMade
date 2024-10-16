import { useContext, useEffect, useState } from "react";
import { UserContext } from "../service/context/UserContext";
import { UserContextInterface } from "../service/type/contextType/userType";
import { router, Stack } from "expo-router";

export default function App() {
  const { userLog } = useContext(UserContext) as UserContextInterface;

  useEffect(() => {
    setTimeout(() => {
      if (userLog) {
        router.push("/tabs/");
      } else {
        router.push("/auth/");
      }
    }, 100);
  }, []);

  return (
    <Stack>
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
    </Stack>
  );
}
