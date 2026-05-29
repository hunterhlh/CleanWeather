import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    JetBrainsMono: require("../../assets/fonts/JetBrainsMono.ttf"),
    InterTight: require("../../assets/fonts/InterTight.ttf"),
  });

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
