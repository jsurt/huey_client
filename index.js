/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/components/App";
import BarcodeScanner from "./src/components/BarcodeScanner";
import TabNavigator from "./src/components/Navigators/TabNavigator";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => TabNavigator);
