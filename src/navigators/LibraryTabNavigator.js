import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import LibraryStackNavigator from "./LibraryStackNavigator";

import LibOverviewScreen from "../screens/library/LibOverviewScreen";
import LibBooksScreen from "../screens/library/LibBooksScreen";
import FavoritesScreen from "../screens/library/FavoritesScreen";

const LibraryTabNavigator = createBottomTabNavigator(
  {
    Overview: LibOverviewScreen,
    Browse: LibraryStackNavigator,
    Favorites: FavoritesScreen
  },
  {
    tabBarOptions: {
      style: {
        height: 25
      }
    }
  },
  {
    initialRouteName: "Overview"
  }
);

export default createAppContainer(LibraryTabNavigator);
