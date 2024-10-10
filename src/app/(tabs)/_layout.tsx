import { Slot, Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="Profil" options={{ headerShown: false }} />
      <Tabs.Screen name="Budget" options={{ headerShown: false }} />
      <Tabs.Screen name="Settings" options={{ headerShown: false }} />
    </Tabs>
  );
}
