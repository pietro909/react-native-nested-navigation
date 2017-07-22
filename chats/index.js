import React, { Component } from "react"
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar,
} from "react-native"
import { StackNavigator, TabNavigator } from "react-navigation";
import AllChatsNavigator from "./AllChats"
import styles from "../styles"

class ChallengeDetailScreen extends Component {
  static navigationOptions = {
    title: "Chat Details",
  }
  render() {
    const { params } = this.props.navigation.state
    return <View style={styles.container}>
      <Text>{params.id} is {params.type}</Text>
      <Text>Details for the chosen challenge {params.id}</Text>
      <Button
        onPress={() =>
          this.props.navigation.navigate('Thread', { id: params.id })
        }
        title="Start thread"
      />
    </View>
  }
}

class ThreadScreen extends Component {
  static navigationOptions = (props) => ({
    title: `Chat ${props.navigation.state.params.id}`,
  })
  render() {
    const { params } = this.props.navigation.state
    return <View style={styles.container}>
      <Text>[{params.id}]</Text>
      <Text>A full screen thread</Text>
      <StatusBar hidden={true} />
    </View>
  }
}

const ChatsNavigator = StackNavigator({
  AllChats: { screen: AllChatsNavigator },
  ChallengeDetail: { screen: ChallengeDetailScreen },
  Thread: { screen: ThreadScreen },
}, {
  headerMode: "screen",
});

ChatsNavigator.navigationOptions = (props) => {
  const { hideMainTabBar } = props.screenProps
  return {
    tabBarVisible: !hideMainTabBar,
  }
}

export default ChatsNavigator

