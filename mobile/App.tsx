import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

import { Routes } from "./src/routes";
import useCachedResources from "./src/hooks/useCachedResources";

export default function App() {
  const { appIsReady } = useCachedResources();

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Routes />
    </>
  );
}
