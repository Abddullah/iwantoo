import React from "react";
import {
  Text,
  View,
  Button,
  Vibration,
  Platform,
  StatusBar,
  ImageBackground,
  StyleSheet
} from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import WebViewComp from '../screens/login/webview';



import firebase from "firebase";
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
export default class AppContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      allUsers: [],
      token: ''
    }
  }

  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.io/dashboard/notifications
  sendPushNotification = async () => {

    const { allUsers, token } = this.state;  // list of all user
    if (allUsers && allUsers.length) {
      allUsers.map((item, index) => {
        // send notification to all users axcept current user
        if (item.expoPushToken != token) {
          console.log("AppContainer -> sendPushNotification -> item", item)

          fetch('https://exp.host/--/api/v2/push/send', {
            mode: 'no-cors',
            method: 'POST',
            headers: {
              "Accept": 'application/json',
              "Content-Type": 'application/json'
            },
            body: JSON.stringify({
              to: item.expoPushToken,
              sound: "default",
              title: "Original Title",
              body: "And here is the body!",
              data: { data: "goes here" },
              _displayInForeground: true,
            })
          });
        }
      })
    }
  };
  signoutHandle = async () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  componentDidMount() {
    this.registerForPushNotifications();
    // Handle notifications that are received or selected while the app
    // is open. If the app was closed and then opened by tapping the
    // notification (rather than just tapping the app icon to open it),
    // this function will fire on the next tick after the app starts
    // with the notification data.
    this._notificationSubscription = Notifications.addListener(this._handleNotification);

    this.getData()

  }



  // getting users from database
  getData() {
    firebase.database().ref('/').on('child_added', snapshot => {
      var arr = [];
      for (var key in snapshot.val()) {
        var data = snapshot.val()[key];
        if (data && data.expoPushToken) {
          arr.push(data)
        }
      }
      if (arr && arr.length) {
        this.setState({ allUsers: arr })
      }
    })

  }

  registerForPushNotifications = async () => {
    // check for existing permisions
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = status;
    //if not permision exiting, ask for it
    if (status !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // if no permmsion, exit the functin
    if (finalStatus !== "granted") {
      return;
    }

    //get the token
    let token = await Notifications.getExpoPushTokenAsync();

    this.setState({ token: token }) // current device token 

    // addtoken to firebase

    let uid = firebase.auth().currentUser.uid;
    firebase.database().ref("users").child(uid).update({
      expoPushToken: token,
      Email: firebase.auth().currentUser.email,
    });
  };

  _handleNotification = (notification) => {
    Vibration.vibrate();

    this.setState({ notification: notification });
  };

  webviewOpen = () => {
    alert("working")
    // this.props.navigation.navigate("WebViewComp")
    console.log(this.props.navigation, "this.props.navigation")
  };


  render() {
    return (
      <View style={styles.container}>
        <Text>DashboardScreen</Text>
        <Button title={"SignOut"} onPress={() => this.signoutHandle()} />
        <Button title={"Push"} onPress={() => this.sendPushNotification()} />
        {/* <Button title={"Web view"} onPress={() => this.webviewOpen()} /> */}
        <WebViewComp />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});