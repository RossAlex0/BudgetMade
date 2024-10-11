import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Regular: require("../../assets/fonts/Poppins-Regular.ttf"),
    Bold: require("../../assets/fonts/Poppins-Bold.ttf"),
    ExtraLight: require("../../assets/fonts/Poppins-ExtraLight.ttf"),
    SemiBold: require("../../assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="Auth" options={{ headerShown: false }} />
    </Stack>
  );
}
