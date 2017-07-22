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

import FriendsScreen from "./Friends"
import ChatsNavigator from "./chats"
import NotificationsScreen from "./Notifications"

const Welcome = TabNavigator({
  Friends: { screen: FriendsScreen },
  Chats: { screen: ChatsNavigator },
  Notifications: { screen: NotificationsScreen },
});

export default Welcome

