/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react"
import { AppRegistry } from "react-native"
import { TabNavigator } from "react-navigation"
import Welcome from "./Welcome"

export default class Router extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hideMainTabBar: false,
    }
  }

  onComponentDidMount() {
    /* I know it's super weird, but this global functions
     * it's the simplest example of programmatical navigation.
     */
    window.goTo = (routeName, params = {})=> {
      this.navigator.dispatch({
        type: "Navigation/NAVIGATE",
        routeName: routeName,
        params,
        action: undefined, // for nested actions
      })
    }
  }

  /**
   * The great news is that this callback is executed wherever a navigation
   * event happens in the tree, no matter the depth.
   */
  onNavigationStateChange(prevState, newState, action) {
    /* the logic for hiding the main TabBar is hosted here, at top level
     * based on the value of the route
     */
    if (action.routeName === "Thread") {
      this.setState({
        hideMainTabBar: true,
      })
    } else if (this.state.hideMainTabBar) {
      // We don't want to trigger a change if not necessary
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

