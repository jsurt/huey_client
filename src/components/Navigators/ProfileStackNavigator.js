"use strict";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

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
          ...styles.containerProfileScreen
        }}
      >
        <View style={styles.profileInfoContainer}>
          <Text style={styles.textStyles}>John Doe</Text>
          <Text style={styles.textStyles}>jdoe@example.com</Text>
        </View>
        <Button
          title="Edit Profile"
          style={styles.btnStyles}
          onPress={() => this.props.navigation.navigate("EditProfile")}
        />
      </View>
    );
  }
}

class EditProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Edit Profile",
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
          ...styles.containerEditProfileScreen
        }}
      >
        <Text style={styles.textStyles}>Editing profile...</Text>
        <Button
          title="Save"
          style={styles.btnStyles}
          onPress={() => this.props.navigation.navigate("Profile")}
        />
      </View>
    );
  }
}

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    EditProfile: EditProfileScreen
  },
  {
    initialRouteName: "Profile"
  }
);

export const styles = StyleSheet.create({
  genericContainerStyles: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignContent: "center"
  },
  containerProfileScreen: {
    backgroundColor: "white"
  },
  containerEditProfileScreen: {
    backgroundColor: "white"
  },
  profileInfoContainer: {
    backgroundColor: "#999999"
  },
  textStyles: {
    textAlign: "center",
    fontSize: 24,
    color: "black"
  },
  btnStyles: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    color: "blue"
  }
});

export default createAppContainer(ProfileStack);
