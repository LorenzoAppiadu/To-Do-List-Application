import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "light" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerStyle: {},
          title: "",
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#000",
          },
          headerTitleAlign: "center",
          headerShadowVisible: false,
        }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="new"
          options={{ headerShown: true, title: "New Task" }}
        />
        <Stack.Screen
          name="edit"
          options={{ headerShown: true, title: "Edit Task" }}
        />
        <Stack.Screen
          name="notifications"
          options={{ headerShown: true, title: "Notifications" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
