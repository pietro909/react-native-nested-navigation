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

export default class NotificationsScreen extends Component {
  render() {
    return <View style={styles.container}>
      <Text>List of notifications</Text>
      <Text style={ styles.instructions }>
      {"Should be able to go straight to a thread from a notification"}
      </Text>
      <Button
        onPress={() =>
          this.props.navigation.navigate('Thread', { id: 999 })
        }
        title="Open thread"
      />
    </View>
  }
}

