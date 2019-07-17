import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import AuthButton from "../../components/AuthButton";

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Login",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "#fff"
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

  }

  handleLogin() {
    this.props.navigation.navigate("App");
  }

  goToSignup() {
    this.props.navigation.navigate("Signup");
  }

  render() {
    return (
      <View>
        <Text>Login</Text>
        <TextInput
          placeholder="Username"
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
        />
        <TextInput
          placeholder="Password"
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
        />
        <AuthButton onPress={this.handleLogin.bind(this)} btnTitle={"Login"} />
        <AuthButton onPress={this.goToSignup.bind(this)} btnTitle={"Create Account"} />
      </View>
    );
  }
}

export default LoginScreen;
