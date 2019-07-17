import React from "react";
import { View, Text, TextInput } from "react-native";
import AuthButton from "../../components/AuthButton";

class SignupScreen extends React.Component {
  static navigationOptions = {
    title: "Create Account",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "#fff"
  };

  handleLogin() {
    this.props.navigation.navigate("App");
  }

  goToLogin() {
    this.props.navigation.navigate("Login");
  }

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
        <AuthButton onPress={this.handleLogin.bind(this)} btnTitle={"Create Account"} />
        <AuthButton onPress={this.goToLogin.bind(this)} btnTitle={"Login"} />
      </View>
    );
  }
}

export default SignupScreen;
