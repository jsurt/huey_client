import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import HomeStack from "./HomeStackNavigator";
import LibraryStack from "./LibraryStackNavigator";

const TabNavigator = createBottomTabNavigator({
  HomeTab: HomeStack,
  LibraryTab: LibraryStack
});

export default createAppContainer(TabNavigator);
