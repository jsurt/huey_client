import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from "../screens/authentication/LoginScreen";
import SignupScreen from "../screens/authentication/SignupScreen";

const authStackNavigator = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen
  },
  {
    initialRoute: "Login"
  }
);

export default createAppContainer(authStackNavigator);
