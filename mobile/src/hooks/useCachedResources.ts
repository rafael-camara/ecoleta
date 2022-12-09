import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold, useFonts } from "@expo-google-fonts/ubuntu";

export default function useCachedResources() {
  const [appIsReady, setAppIsReady] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          Roboto_400Regular,
          Roboto_500Medium,
          Ubuntu_700Bold,
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setAppIsReady(true);

        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return { appIsReady };
}
