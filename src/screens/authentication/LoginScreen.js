import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import firebase from "react-native-firebase";
import LoginOrSignupButton from "../../components/buttons/LoginOrSignupButton";
import Button_1 from "../../components/buttons/Button_1";
import Input_1 from "../../components/inputs/Input_1";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  static navigationOptions = {
    title: "Login",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "#fff"
  };

  handleLogin() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
    // this.props.navigation.navigate("App");
  }

  goToSignup() {
    this.props.navigation.navigate("Signup");
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.loginFormWrapper}>
          <Input_1
            placeholder={"Email"}
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
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
