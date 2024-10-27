import { useRouter, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  FrankRuhlLibre_800ExtraBold,
  FrankRuhlLibre_500Medium,
  FrankRuhlLibre_900Black,
} from "@expo-google-fonts/frank-ruhl-libre";
import { useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Appearance, TouchableOpacity, useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { Colors } from "@/constants/Colors";
import Logo from "@/assets/images/nyt-logo.svg";
import { Ionicons } from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    FrankRuhlLibre_800ExtraBold,
    FrankRuhlLibre_500Medium,
    FrankRuhlLibre_900Black,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  // Appearance.setColorScheme("light");

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen
              name="game"
              options={{
                title: "",
                headerBackTitle: "Словцо",
                headerBackTitleStyle: {
                  fontFamily: "FrankRuhlLibre_800ExtraBold",
                  fontSize: 24,
                },
                headerTintColor: colorScheme === "dark" ? "#fff" : "#000",
              }}
            />
            <Stack.Screen
              name="login"
              options={{
                presentation: "modal",
                headerTitle: () => <Logo width={150} height={40} />,
                headerShadowVisible: false,
                headerLeft: () => (
                  <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons
                      name="close"
                      size={26}
                      color={Colors.light.gray}
                    />
                  </TouchableOpacity>
                ),
              }}
            />
          </Stack>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
