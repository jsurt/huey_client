import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

class FavoritesScreen extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={{ textAlign: "center" }}>
          This is where the user's favorite books are displayed
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

export default FavoritesScreen;
