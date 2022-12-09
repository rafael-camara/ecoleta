import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Points } from "../screens/Points";
import { Detail } from "../screens/Detail";

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "#f0f0f5",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Points" component={Points} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}
