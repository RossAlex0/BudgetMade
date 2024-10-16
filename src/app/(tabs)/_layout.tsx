import { Tabs } from "expo-router";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "@/src/style/colors";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 60,
          display: "flex",
          justifyContent: "center",
          paddingBottom: 6,
          paddingTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home-outline"
              size={26}
              color={focused ? colors.primary_color : colors.gray_dark}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? colors.primary_color : colors.gray_dark,
                fontSize: 14,
              }}
            >
              Accueil
            </Text>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Budget"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="wallet-outline"
              size={24}
              color={focused ? colors.primary_color : colors.gray_dark}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? colors.primary_color : colors.gray_dark,
                fontSize: 14,
              }}
            >
              Budget
            </Text>
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="settings-outline"
              size={24}
              color={focused ? colors.primary_color : colors.gray_dark}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? colors.primary_color : colors.gray_dark,
                fontSize: 14,
              }}
            >
              Paramètres
            </Text>
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
