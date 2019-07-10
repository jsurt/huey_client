"use strict";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    <View>
      <Text style={styles.textStyles}>I'm the Home Screen</Text>
      <TouchableOpacity
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
      >
        Other Screen
      </TouchableOpacity>
    </View>;
  }
}

class OtherScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.textStyles}>
          I'm another screen. I'm not the Home Screen
        </Text>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignContent: "center" }}
        >
          Go Back
        </TouchableOpacity>
      </View>
    );
  }
}

const AppNavigator_1 = createStackNavigator(
  {
    Home: HomeScreen,
    Other: OtherScreen
  },
  {
    initialRouteName: "Home"
  }
);

const styles = StyleSheet.create({
  containerHomeScreen: {
    flex: 1,
    backgroundColor: "grey"
  },
  containerOtherScreen: {
    flex: 1,
    backgroundColor: "blue"
  },
  textStyles: {
    fontSize: 24
  }
});

export default AppNavigator_1;
