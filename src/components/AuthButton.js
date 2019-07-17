import React from "react";
import { Text, Button } from "react-native";

const AuthButton = props => {
  return <Button 
    onPress={() => props.onPress()} 
    title={props.btnTitle} 
    />;
};

export default AuthButton;
