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
import NavTwo from "./NavTwo"

function buildAction(routes) {
  const first = {}
  const { head } = routes.reduce(({ previousAction, head }, routeName) => {
    const nextAction = {
      params: undefined,
      action: undefined,
      routeName,
      type: "Navigation/NAVIGATE"
    }
    previousAction.action = nextAction
    return { previousAction: nextAction, head }
  }, { previousAction: first, head: first })
  return head.action
}

export default class Router extends Component {
  constructor(props) {
    super(props)
    window.goTo = path =>
      this.navigator.dispatch(buildAction(path))
  }

  render() {
    return <NavOne
     ref={navigatorRef => this.navigator = navigatorRef}
    />
  }
}

AppRegistry.registerComponent("Router", () => Router)

