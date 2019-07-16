import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthButton } from "./components/AuthButton";

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
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
        <AuthButton btnTitle={"Login"} />
      </View>
    );
  }
}

export default componentName;
