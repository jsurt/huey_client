import React from "react";
import { View, Text, TextInput } from "react-native";
import { AuthButton } from "../components/AuthButton";

class SignupScreen extends Component {
  render() {
    return (
      <View>
        <Text>Create Account</Text>
        <View>
          <TextInput placeholder="Firstname" />
          <TextInput placeholder="Lastname" />
          <TextInput placeholder="Username" />
          <TextInput placeholder="Password" />
          <TextInput placeholder="Confirm Password" />
        </View>
        <AuthButton btnTitle={"Create Account"} />
      </View>
    );
  }
}

export default SignupScreen;
