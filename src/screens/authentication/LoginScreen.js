import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import LoginOrSignupButton from "../../components/buttons/LoginOrSignupButton";
import Button_1 from "../../components/buttons/Button_1";
import Input_1 from "../../components/inputs/Input_1";

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
      <View style={styles.wrapper}>
        <View style={styles.loginFormWrapper}>
          <Input_1
            placeholder={"Username"}
            onChangeText={text => this.setState({ username: text })}
            value={this.state.username}
          />
          <Input_1
            placeholder={"Password"}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
          />
          <Button_1 title={"Login"} onPress={this.handleLogin.bind(this)} />
        </View>
        <View style={styles.redirectWrapper}>
          <Text style={{ textAlign: "center" }}>Don't have an account?</Text>
          <Button_1
            onPress={this.goToSignup.bind(this)}
            title={"Create Account"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column"
  },
  loginFormWrapper: {
    flex: 3,
    justifyContent: "center"
  },
  redirectWrapper: {
    flex: 2,
    justifyContent: "center"
  }
});

export default LoginScreen;
