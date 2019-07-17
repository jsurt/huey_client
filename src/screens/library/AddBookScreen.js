import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button_1 from "../../components/buttons/Button_1";
import Input_1 from "../../components/inputs/Input_1";

class AddBookScreen extends React.Component {
  handleScanBook() {
    this.props.navigation.navigate("ScanBook");
  }
  handleSearchTitle() {
    this.props.navigation.navigate("Confirmation");
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.scanWrapper}>
          {/* <Text>Scan a book</Text> */}
          <Button_1
            title={"Scan Book"}
            onPress={this.handleScanBook.bind(this)}
          />
        </View>
        <View style={styles.byTitleWrapper}>
          {/* <Text>Scan a book</Text> */}
          <Input_1 placeholder={"Enter title"} />
          <Button_1
            title={"Add by Title"}
            onPress={this.handleSearchTitle.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  scanWrapper: {
    flex: 1,
    justifyContent: "center"
  },
  byTitleWrapper: {
    flex: 1,
    justifyContent: "center"
  }
});

export default AddBookScreen;
