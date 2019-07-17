import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import LibBooksScreen from "../screens/library/LibBooksScreen";
import AddBookScreen from "../screens/library/AddBookScreen";
import ConfirmNewBookScreen from "../screens/library/ConfirmNewBookScreen";
import BarcodeScanner from "../components/BarcodeScanner";

const LibraryStackNavigator = createStackNavigator(
  {
    Main: LibBooksScreen,
    AddBook: AddBookScreen,
    ScanBook: BarcodeScanner,
    Confirmation: ConfirmNewBookScreen
  },
  {
    initialRouteName: "Main"
  }
);

export default createAppContainer(LibraryStackNavigator);
