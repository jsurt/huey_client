import { createSwitchNavigator, createAppContainer } from "react-navigation";
import AuthStackNavigator from "./AuthNavigator";
import AppTabNavigator from "./AppTabNavigator";
// Need to make loading screen

const MainNavigator = createSwitchNavigator(
  {
    Auth: AuthStackNavigator,
    App: AppTabNavigator
  },
  {
    initialRoute: "Auth"
  }
);

const App =  createAppContainer(MainNavigator)

export default App;
