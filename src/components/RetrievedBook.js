import React from "react";
import {View, Text, StyleSheet} from "react-native";

const RetrievedBook = props => {
    return(
        <View>
            <Text>{props.title}</Text>
            <Text>{props.authors}</Text>
            <Text>{props.publishedDate}</Text>
        </View>
    );
}

export default RetrievedBook;