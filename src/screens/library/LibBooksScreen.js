import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";

class LibBooksScreen extends React.Component {
  static navigationOptions = {
    title: "Library",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "#fff"
  };

  handleAddBook() {
    this.props.navigation.navigate("AddBook");
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={{ textAlign: "center" }}>
          This is where the users sees his books sorted and whatnot
        </Text>
        <Button title="Add Book" onPress={this.handleAddBook.bind(this)} />
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

export default LibBooksScreen;
