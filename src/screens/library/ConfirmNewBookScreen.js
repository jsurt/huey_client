import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import Button_1 from "../../components/buttons/Button_1";
import Input_1 from "../../components/inputs/Input_1";
import RetrievedBook from "../../components/RetrievedBook";

class ConfirmNewBookScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      authors: "",
      thumbnails: []
    };
  }
  componentDidMount() {
    const title = this.props.navigation.getParam("title", "No title found");
    const authors = this.props.navigation.getParam(
      "authors",
      "No authors found"
    );
    const thumbnails = this.props.navigation.getParam(
      "thumbnails",
      "No thumbnails found"
    );
    this.setState({
      title,
      authors,
      thumbnails
    });
  }
  handleBookIsCorrect() {
    this.props.navigation.navigate("Main");
  }
  handleBookIsNotCorrect() {
    this.props.navigation.navigate("Main");
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.wrapper}>
        <View>
          <Input_1 value={this.state.title} />
          <Input_1 value={this.state.authors} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.buttonWrapper}>
            <Button_1
              title={"Add Book"}
              onPress={this.handleBookIsCorrect.bind(this)}
            />
            <Button_1
              title={"Discard"}
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
