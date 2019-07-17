import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button_1 from "../../components/buttons/Button_1";

class ConfirmNewBookScreen extends React.Component {
  handleBookIsCorrect() {
    this.props.navigation.navigate("Main");
  }
  handleBookIsNotCorrect() {
    this.props.navigation.navigate("Main");
  }
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.textWrapper}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16
            }}
          >
            Is this correct?
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.buttonWrapper}>
            <Button_1
              title={"Yes"}
              onPress={this.handleBookIsCorrect.bind(this)}
            />
            <Button_1
              title={"No"}
              onPress={this.handleBookIsNotCorrect.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column"
  },
  textWrapper: {
    flex: 1,
    justifyContent: "center"
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default ConfirmNewBookScreen;
