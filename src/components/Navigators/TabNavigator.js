import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import ProfileStack from "./ProfileStackNavigator";
import LibraryStack from "./LibraryStackNavigator";

const TabNavigator = createBottomTabNavigator({
  Profile: ProfileStack,
  Library: LibraryStack
});

export default createAppContainer(TabNavigator);
