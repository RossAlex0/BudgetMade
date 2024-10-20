import { useContext, useEffect } from "react";
import { router, Stack } from "expo-router";

import { UserContext } from "../service/context/UserContext";
import { UserContextInterface } from "../service/type/contextType/userType";

export default function App() {
  const { userLog, isLoading } = useContext(
    UserContext
  ) as UserContextInterface;
  useEffect(() => {
    setTimeout(() => {
      if (!isLoading) {
        if (userLog?.email !== "") {
          router.push("/tabs/");
        } else {
          router.push("/auth/");
        }
      }
    }, 100);
  }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="tabs" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
    </Stack>
  );
}
