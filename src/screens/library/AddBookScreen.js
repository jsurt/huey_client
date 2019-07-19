import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button_1 from "../../components/buttons/Button_1";
import Input_1 from "../../components/inputs/Input_1";
import axios from "axios";
import { BOOK_DATA_ENDPOINT } from "../../../config";

class AddBookScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleScanBook() {
    this.props.navigation.navigate("ScanBook");
  }
  async handleSearchTitle() {
    let data = await this.fetchBookByTitle(this.state.title);
    const { title, authors, thumbnails } = data;
    this.props.navigation.navigate("Confirmation", {
      title,
      authors,
      thumbnails
    });
  }
  fetchBookByTitle(title) {
    return fetch(`${BOOK_DATA_ENDPOINT}/google-books/${title}`)
      .then(res => res.json())
      .then(json => {
        return json;
      })
      .catch(err => {
        console.error(err);
      });
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
          <Input_1
            placeholder={"Enter title"}
            onChangeText={text => this.setState({ title: text })}
            value={this.state.title}
          />
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
