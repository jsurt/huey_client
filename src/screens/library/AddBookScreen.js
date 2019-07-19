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
    console.log(data.items[0].volumeInfo);
    let bookDataArr = [];
    console.log(data.items.length);
    for (let i = 0; i < data.items.length; i++) {
      let book = {};
      let {
        title,
        authors,
        publishedDate,
        description
      } = data.items[i].volumeInfo;
      book.key = (i + 1).toString();
      book.title = title;
      book.authors = authors;
      book.publishedDate = publishedDate;
      bookDataArr[i] = book;
    }
    // console.log(bookDataArr);
    this.props.navigation.navigate("Confirmation", { bookDataArr });
  }
  fetchBookByTitle(title) {
    return fetch(`${BOOK_DATA_ENDPOINT}/title/${title}`)
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
