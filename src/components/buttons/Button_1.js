import React from "react";
import { Button, StyleSheet } from "react-native";

const Button_1 = props => {
  return (
    <Button
      style={styles.general}
      title={props.title}
      onPress={props.onPress}
    />
  );
};

const styles = StyleSheet.create({
  general: {
    borderWidth: 1,
    borderColor: "black"
  }
});

export default Button_1;
