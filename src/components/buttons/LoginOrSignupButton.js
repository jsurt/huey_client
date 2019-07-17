import React from "react";
import { Text, Button, StyleSheet } from "react-native";

const LoginOrSignupButton = props => {
  return <Button onPress={() => props.onPress()} title={props.btnTitle} />;
};

const styles = StyleSheet.create({
  inactive: {}
});

export default LoginOrSignupButton;
