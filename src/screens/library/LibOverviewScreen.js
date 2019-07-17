import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

class LibOverviewScreen extends React.Component {
  static navigationOptions = {
    title: "Overview",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "#fff"
  };
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={{ textAlign: "center" }}>
          I'm the screen where the user sees his entire library!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});

export default LibOverviewScreen;
