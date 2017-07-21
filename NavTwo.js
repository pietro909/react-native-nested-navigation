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


class RecentChatsScreen extends React.Component {
  static navigationOptions = {
    title: "Recent",
  }
  render() {
    return <View>
      <Text>List of recent chats</Text>
      <Button
        onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
        title="Chat with Lucy"
      />
    </View>
  }
}

class AllContactsScreen extends React.Component {
  static navigationOptions = {
    title: "Recent",
  }
  render() {
return <View>
      <Text>List of all chats</Text>
      <Button
        onPress={() => this.props.navigation.navigate('Chat', { user: 'Piero' })}
        title="Chat with Piero"
      />
    </View>

  }
}

const MainScreenNavigator = StackNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};

export default MainScreenNavigator
