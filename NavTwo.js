import React, { Component } from "react"
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native"
import { StackNavigator } from "react-navigation"
import styles from "./styles"

class Kitchen extends Component {
  static navigationOptions = {
    title: "Kitchen",
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate("Bathroom")}
          title="Go to Bathroom"
        />
      </View>
    )
  }
}

class Bathroom extends Component {
  static navigationOptions = {
    title: "Bathroom",
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate("Work")}
          title="Go to Work"
        />
      </View>
    )
  }
}

const NavTwo = StackNavigator({
  Kitchen: { screen: Kitchen, path: "kitchen" },
  Bathroom: { screen: Bathroom, path: "bathroom" },
})

const getStateForAction = NavTwo.router.getStateForAction
NavTwo.router.getStateForAction = (action, state) => {
  console.log("two", action, state)
  const result = getStateForAction(action, state)
  return result
}

export default NavTwo

