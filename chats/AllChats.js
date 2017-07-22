import React, { Component } from "react"
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native"
import { StackNavigator, TabNavigator } from "react-navigation";
import styles from "../styles"


class CurrentChatsScreen extends Component {
  static navigationOptions = { }
  render() {
    return <View style={styles.container}>
      <Text>List of current Chats</Text>
      <Text style={ styles.instructions }>
      {"I expect to be able to open a StackNavigator page from here"}
      </Text>
      <Button
        onPress={() =>
          this.props.navigation.navigate(
            'ChallengeDetail',
            { id: 1234 , type: "Current" },
          )
        }
        title="Open details for chat #1234"
      />
    </View>
  }
}

class HistoricalChatsScreen extends Component {
  static navigationOptions = { }
  render() {
    return <View style={styles.container}>
      <Text>List of all Chats</Text>
      <Text style={ styles.instructions }>
      {"I expect to be able to open a StackNavigator page from here"}
      </Text>
      <Button
        onPress={() =>
          this.props.navigation.navigate(
            'ChallengeDetail',
            { id: 0, type: "Historical" },
          )
        }
        title="Open details for chat #0"
      />
    </View>
  }
}

const ChatsNavigator = TabNavigator({
  Current: { screen: CurrentChatsScreen },
  Historical: { screen: HistoricalChatsScreen },
}, {
  tabBarPosition: "top",
  swipeEnabled: true,
});

ChatsNavigator.navigationOptions = {
  header: null,
};

export default ChatsNavigator
