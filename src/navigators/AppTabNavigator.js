import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import ProfileStack from "./ProfileStackNavigator";
import LibraryTabNavigator from "./LibraryTabNavigator";

const AppTabNavigator = createBottomTabNavigator(
  {
    Profile: ProfileStack,
    Library: LibraryTabNavigator
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: "black"
      }
    }
  },
  {
    initialRoute: "Profile"
  }
);

export default createAppContainer(AppTabNavigator);
