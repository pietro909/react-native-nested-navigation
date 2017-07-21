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
import NavTwo from "./NavTwo"

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: "Home",
  }
  render() {
    return (
      <NavTwo />
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
          onPress={() => this.props.navigation.navigate("Kitchen")}
          title="Go to home"
        />
      </View>
    )
  }
}

const NavOne = TabNavigator({
  Home: { screen: Home, path: "/home/" },
  Work: { screen: Work, path: "/work" },
})

const getStateForAction = NavOne.router.getStateForAction
NavOne.router.getStateForAction = (action, state) => {
  console.log("one", action, state)
  const result = getStateForAction(action, state)
  return result
}

export default NavOne

