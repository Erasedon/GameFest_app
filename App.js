const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import IPhone14Accueil from "./screens/IPhone14Accueil";
import PlanningNancy from "./screens/PlanningNancy";
import PlanDevenementNanncy from "./screens/PlanDevenementNanncy";
import StandsNANCY from "./screens/StandsNANCY";
import ActivityNancy from "./screens/ActivityNancy";
import PlanningStrasbourg from "./screens/PlanningStrasbourg";
import PlanDevenementStrasbourg from "./screens/PlanDevenementStrasbourg";
import AccueilStrasbourg from "./screens/AccueilStrasbourg";
import StandsStrasbourg from "./screens/StandsStrasbourg";
import ActivityStrasbourg from "./screens/ActivityStrasbourg";
import PlanningCmz from "./screens/PlanningCmz";
import PlanDevenement from "./screens/PlanDevenement";
import AccueilNANCY from "./screens/AccueilNANCY";
import AccueilCMZ from "./screens/AccueilCMZ";
import StandsCMZ from "./screens/StandsCMZ";
import Activity from "./screens/Activity";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Noto Sans Malayalam UI_regular": require("./assets/fonts/Noto_Sans_Malayalam_regular.ttf"),
    "Noto Sans Malayalam UI_medium": require("./assets/fonts/Inter_medium.ttf"),
    "Noto Sans Malayalam UI_semibold": require("./assets/fonts/Noto_Sans_Malayalam_semibold.ttf"),
    "Noto Sans Malayalam UI_bold": require("./assets/fonts/Noto_Sans_Malayalam_semibold.ttf"),
    "Noto Sans Malayalam UI_black": require("./assets/fonts/Noto_Sans_Malayalam_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_semibold_italic: require("./assets/fonts/Inter_semibold_italic.ttf"),
    "Noto Sans Malayalam_regular": require("./assets/fonts/Noto_Sans_Malayalam_regular.ttf"),
    "Noto Sans Malayalam_semibold": require("./assets/fonts/Noto_Sans_Malayalam_semibold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
    <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="IPhone14Accueil"
              component={IPhone14Accueil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlanningNancy"
              component={PlanningNancy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlanDevenementNanncy"
              component={PlanDevenementNanncy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StandsNANCY"
              component={StandsNANCY}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ActivityNancy"
              component={ActivityNancy}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlanningStrasbourg"
              component={PlanningStrasbourg}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlanDevenementStrasbourg"
              component={PlanDevenementStrasbourg}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccueilStrasbourg"
              component={AccueilStrasbourg}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StandsStrasbourg"
              component={StandsStrasbourg}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ActivityStrasbourg"
              component={ActivityStrasbourg}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlanningCmz"
              component={PlanningCmz}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PlanDevenement"
              component={PlanDevenement}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccueilNANCY"
              component={AccueilNANCY}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccueilCMZ"
              component={AccueilCMZ}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StandsCMZ"
              component={StandsCMZ}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Activity"
              component={Activity}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
   </>
  );
};
export default App;
