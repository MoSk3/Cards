import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";

import { useColorScheme } from "../hooks/useColorScheme";
import ThemeProvider from "../providers/ThemeContext";
import { Colors } from "../constants/Colors";

export default function RootLayout() {
  const deviceTheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // Set CSS variables based on theme
  useEffect(() => {
    const theme = /*deviceTheme ??*/ "light";
    const colors = Colors[theme];

    // Set CSS variables for current theme
    if (typeof document !== "undefined") {
      const root = document.documentElement;

      // Set primary colors
      Object.entries(colors.primary).forEach(([key, value]) => {
        root.style.setProperty(`--color-primary-${key}`, value);
      });

      // Set gray colors
      Object.entries(colors.gray).forEach(([key, value]) => {
        root.style.setProperty(`--color-gray-${key}`, value);
      });

      // Set accent colors
      Object.entries(colors.accent).forEach(([key, value]) => {
        root.style.setProperty(`--color-accent-${key}`, value);
      });
    }
  }, [deviceTheme]);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider
      value={{
        theme: /*deviceTheme ??*/ "light",
        toggleTheme: () => {},
      }}
    >
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: "var(--color-gray-50)",
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
