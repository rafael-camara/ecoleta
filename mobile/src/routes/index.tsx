import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import LinkingConfig from "../config/linking.config";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer linking={LinkingConfig}>
        <AppRoutes />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
