import React, { Component } from "react"
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native"
import { StackNavigator, TabNavigator } from "react-navigation";
import styles from "./styles"
import MainScreenNavigator from "./NavTwo"

class ChatScreen extends React.Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with someone` //${navigation.state.params.user}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    //const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with params.user</Text>
        <Button
          onPress={() => this.props.navigation.navigate('All')}
        title="Go to all"
      />
      </View>
    );
  }
}

const SimpleApp = TabNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

export default SimpleApp
