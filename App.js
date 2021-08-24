import React, { Component } from "react";
import { View, Text, StyleSheet, Vibration, Platform } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import LoadingScreen from "./screens/login/loadingScreen";
import LoginScreen from "./screens/login/loginScreen";
import DashboardScreen from "./MainApp";
import Constants from "expo-constants";

import firebase from "firebase";
import { globalStyles } from "./styles/global";
require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyAWe1wOBT1uknJTnnBpaIFWJWZJAc0gAEI",
  authDomain: "expopushtest-21a17.firebaseapp.com",
  databaseURL: "https://expopushtest-21a17.firebaseio.com",
  projectId: "expopushtest-21a17",
  storageBucket: "expopushtest-21a17.appspot.com",
  messagingSenderId: "440264739101",
  appId: "1:440264739101:web:3a4ddffd763eb63efc79f4",
  measurementId: "G-F9P570SGMG"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class App extends React.Component {
  
  render() {
    return <AppNavigator />;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  DashboardScreen: DashboardScreen,
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const uid = firebase.auth().currentUser;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
