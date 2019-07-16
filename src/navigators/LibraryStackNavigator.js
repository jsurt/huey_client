"use strict";
import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import { styles } from "./ProfileStackNavigator";
import BarcodeScanner from "../components/BarcodeScanner";

class EntireLibraryScreen extends React.Component {
  static navigationOptions = {
    title: "Library",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "#fff"
  };
  render() {
    return (
      <View style={styles.genericContainerStyles}>
        <Text style={styles.textStyles}>
          I'm the screen where the user sees his entire library!
        </Text>
        <Button
          title="Library Details"
          styles={styles.btnStyles}
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

class LibraryDetails extends React.Component {
  static navigationOptions = {
    title: "Details",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "#fff"
  };
  render() {
    return (
      <View style={styles.genericContainerStyles}>
        <Text style={{ textAlign: "center" }}>
          This is where the users sees his books sorted and whatnot
        </Text>
        <Button
          title="Scan a Book"
          styles={styles.btnStyles}
          onPress={() => this.props.navigation.navigate("BarCodeScanner")}
        />
      </View>
    );
  }
}

class NewBookScanned extends React.Component {
  static navigationOptions = {
    title: "Details",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "#fff"
  };
  render() {
    const { navigation } = this.props;
    const newBookTitle = navigation.getParam("title", "Title not found");
    const newBookImageSrc = navigation.getParam(
      "image",
      "Title image not found"
    );
    return (
      <View style={styles.genericContainerStyles}>
        <Image
          source={{ uri: newBookImageSrc }}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{ textAlign: "center" }}>
          Add {JSON.stringify(newBookTitle)} to your library?
        </Text>
        <Button
          title="Done"
          style={styles.btnStyles}
          onPress={() => this.props.navigation.navigate("Overview")}
        />
      </View>
    );
  }
}

const LibraryTabNavigator = createBottomTabNavigator(
  {
    Overview: EntireLibraryScreen,
    Details: LibraryDetails,
    BarcodeScanner: BarcodeScanner,
    NewBook: NewBookScanned
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
