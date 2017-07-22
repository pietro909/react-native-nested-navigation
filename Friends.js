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

export default class FriendsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          List of friends
        </Text>
        <Text style={ styles.instructions }>
        {"Just a plain list, you can't navigate"}
        </Text>
        { [ "Pietro", "Mike", "Ivan", "Sergio", "Quentin" ].map( name =>
          <Text key={name} style={ styles.instructions }>
          {name}
          </Text>
        )}
      </View>
    )
  }
}

