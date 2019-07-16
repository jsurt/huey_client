/**
 * @format
 */

import { AppRegistry } from "react-native";
import TabNavigator from "./src/navigators/TabNavigator";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => TabNavigator);
