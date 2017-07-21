import React, { Component } from "react"
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native"
import { TabNavigator } from "react-navigation"
import styles from "./styles"

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: "Home",
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate("Work")}
          title="Go to work"
        />
      </View>
    )
  }
}

class Work extends Component {
  static navigationOptions = {
    tabBarLabel: "Work",
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate("Home")}
          title="Go to home"
        />
      </View>
    )
  }
}

const NavOne = TabNavigator({
  Home: { screen: Home },
  Work: { screen: Work },
})

export default NavOne
