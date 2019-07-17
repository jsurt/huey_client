import React from "react";
import { View, Text, StyleSheet } from "react-native";
import LoginOrSignupButton from "../../components/buttons/LoginOrSignupButton";
import Button_1 from "../../components/buttons/Button_1";
import Input_1 from "../../components/inputs/Input_1";

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
      <View style={styles.wrapper}>
        <View style={styles.signupFormWrapper}>
          <Input_1 placeholder="Firstname" />
          <Input_1 placeholder="Lastname" />
          <Input_1 placeholder="Username" />
          <Input_1 placeholder="Password" />
          <Input_1 placeholder="Confirm Password" />
          <Button_1
            title={"Create Account"}
            onPress={this.handleLogin.bind(this)}
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
