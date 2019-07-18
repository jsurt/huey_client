import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input_1 = props => {
  return (
    <TextInput
      style={styles.general}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
};

const styles = StyleSheet.create({
  general: {
    height: 40,
    margin: 7,
    padding: 3,
    borderWidth: 1,
    borderColor: "grey"
  }
});

export default Input_1;
