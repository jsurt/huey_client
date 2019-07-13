"use strict";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "#fff"
  };
  render() {
    return (
      <View
        style={{
          ...styles.genericContainerStyles,
          ...styles.containerHomeScreen
        }}
      >
        <Text style={styles.textStyles}>I'm the Home Screen</Text>
        <Button
          title="View Profile"
          style={styles.btnStyles}
          onPress={() => this.props.navigation.navigate("Profile")}
        />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "#fff"
  };
  render() {
    return (
      <View
        style={{
          ...styles.genericContainerStyles,
          ...styles.containerOtherScreen
        }}
      >
        <Text style={styles.textStyles}>
          The user views they're profile here!
        </Text>
        <Button
          title="Home"
          style={styles.btnStyles}
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: "Home"
  }
);

export const styles = StyleSheet.create({
  genericContainerStyles: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center"
  },
  containerHomeScreen: {
    backgroundColor: "grey"
  },
  containerOtherScreen: {
    backgroundColor: "blue"
  },
  textStyles: {
    textAlign: "center",
    fontSize: 24,
    color: "white"
  },
  btnStyles: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "white"
  }
});

export default createAppContainer(HomeStack);
