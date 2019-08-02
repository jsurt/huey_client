import React from "react";
import { View, Text, StyleSheet } from "react-native";
import firebase from "react-native-firebase";
import LoginOrSignupButton from "../../components/buttons/LoginOrSignupButton";
import Button_1 from "../../components/buttons/Button_1";
import Input_1 from "../../components/inputs/Input_1";

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  static navigationOptions = {
    title: "Create Account",
    headerStyle: {
      backgroundColor: "black"
    },
    headerTintColor: "#fff"
  };

  handleSignup() {
    const { email, password } = this.state;
    console.log(email, password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
    // this.props.navigation.navigate("App");
  }

  goToLogin() {
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.signupFormWrapper}>
          <Input_1 placeholder="Firstname" />
          <Input_1 placeholder="Lastname" />
          <Input_1
            placeholder="Email"
            onChangeText={text => this.setState({ email: text })}
          />
          <Input_1
            placeholder="Password"
            onChangeText={text => this.setState({ password: text })}
          />
          <Input_1 placeholder="Confirm Password" />
          <Button_1
            title={"Create Account"}
            onPress={this.handleSignup.bind(this)}
          />
        </View>
        <View style={styles.redirectWrapper}>
          <Text style={{ textAlign: "center" }}>Already have an account?</Text>
          <Button_1 onPress={this.goToLogin.bind(this)} title={"Login"} />
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
  signupFormWrapper: {
    flex: 3,
    justifyContent: "center"
  },
  redirectWrapper: {
    flex: 2,
    justifyContent: "center"
  }
});

export default SignupScreen;
