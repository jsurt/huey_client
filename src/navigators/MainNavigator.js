import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AuthNavigator from "./AuthNavigator";
import AppTabNavigator from "./AppTabNavigator";
// Need to make loading screen

const MainNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppTabNavigator
  },
  {
    initialRoute: "Auth"
  }
);

export default MainNavigator;
