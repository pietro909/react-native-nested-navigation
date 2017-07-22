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
import Welcome from "./Welcome"

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
    window.goTo = routeName => {
      this.navigator.dispatch({
        type: "Navigation/NAVIGATE",
        routeName: routeName,
        params: undefined,
        action: undefined,
      })
    }
    this.state = {
      hideMainTabBar: false,
    }
  }

  componentDidMount() {
    console.log(this.navigator)
    // this.navigator.subscribe(e => console.log(e))
  }

  onNavigationStateChange(prevState, newState, action) {
    console.info("oNSC", newState, action)
    if (action.routeName === "Thread") {
      this.setState({
        hideMainTabBar: true,
      })
    } else if (this.state.hideMainTabBar) {
      this.setState({
        hideMainTabBar: false,
      })
    }
  }

  render() {
    return <Welcome
      ref={navigatorRef => this.navigator = navigatorRef}
      screenProps={{
        hideMainTabBar: this.state.hideMainTabBar,
      }}
      onNavigationStateChange={this.onNavigationStateChange.bind(this)}
    />
  }
}

AppRegistry.registerComponent("Router", () => Router)

