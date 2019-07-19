import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

class RetrievedBooksThumbnails extends React.Component {
  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({ item }) => {
          console.log(item.src);
          return (
            <View>
              <Image
                source={{ uri: item.src }}
                style={{ width: 51, height: 75 }}
              />
            </View>
          );
        }}
        horizontal={true}
      />
    );
  }
}

export default RetrievedBooksThumbnails;
