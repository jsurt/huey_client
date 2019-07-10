/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/components/App";
import BarcodeScanner from "./src/components/BarcodeScanner";
import AppNavigator_1 from "./src/components/StackNavigation";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => BarcodeScanner);
