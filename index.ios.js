/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react"
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from "react-native"
import { TabNavigator } from "react-navigation"
import NavOne from "./NavOne"

export default class Router extends Component {
  render() {
    return <NavOne />
  }
}

AppRegistry.registerComponent("Router", () => Router)

