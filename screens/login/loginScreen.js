import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  TouchableHighlight,
  Linking,
  KeyboardAvoidingView,
} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AuthSession } from 'expo'
import { Container, Content, Header, Form, Input, Item, Button, Label, } from 'native-base'
import { WebView, } from 'react-native';
import firebase from "firebase";

import { globalStyles } from "../../styles/global";

const auth0Domain = 'https://equippersapp.au.auth0.com';
const auth0ClientId = 'WQ19Q995uyKiZSeHf6gC1p9J3G5cMTq3';
const redirectUrl = 'https://manage.auth0.com/tester/callback'

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

class componentName extends Component {

  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("Password needs to be more than 6")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)

    } catch (error) {
      console.log(error)

    }

  }

  _loginWithAuth0 = async () => {
    // const redirectUrl = AuthSession.getRedirectUrl();
    let authUrl = `${auth0Domain}/authorize?client_id=${auth0ClientId}&response_type=token&connection=planningcenter&prompt=login&scope=openid%20profile&redirect_uri=${redirectUrl}?connection=planningcenter`
    https://equippersapp.au.auth0.com/authorize?client_id=WQ19Q995uyKiZSeHf6gC1p9J3G5cMTq3&response_type=code&connection=planningcenter&prompt=login&scope=openid%20profile&redirect_uri=https://manage.auth0.com/tester/callback?connection=planningcenter
    //  + Object.toString({
    //   client_id: auth0ClientId,
    //   response_type: 'token',
    //   scope: 'openid profile email',
    //   redirect_uri: redirectUrl,
    // });
    console.log(`Redirect URL (add this to Auth0): ${redirectUrl}`);
    console.log(`AuthURL is:  ${authUrl}`);
    const result = await AuthSession.startAsync({
      authUrl: authUrl
    });

    console.log(result, 'result****');
    if (result.type === 'success') {
      return await result
    }
  };

  loginWithPlanning() {
    console.log('hello', this.props.navigation)
    alert("work")
    // this.props.navigation.navigate("WebViewComp")
    this.props.navigation.navigate("WebViewComp")
    // this._loginWithAuth0().then((response) => {
    //   console.log(response, 'responseresponse***()')
    // })

  }

  logInUser = (email, password) => {

    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user)
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (

      <ImageBackground source={require("../../assets/13914.png")} style={globalStyles.giveImage}>
        <KeyboardAvoidingView style={styles.keyboardAvoidContainer} behavior="padding">
          <View>

            <StatusBar backgroundColor="blue" barStyle="light-content" />

            <View style={{ backgroundColor: '#141218', padding: 20, height: vh(55), borderTopRightRadius: 30, borderTopLeftRadius: 30, zIndex: 99, justifyContent: 'flex-start' }}>





              <Container style={styles.container}>

                <Form>
                  <Item floatingLabel>
                    <Label
                      style={styles.labelFont}
                    >Email</Label>
                    <Input
                      style={styles.labelFont}
                      autoCorrect={false}
                      autoCapitalize='none'
                      onChangeText={(email) => this.setState({ email })}
                    />
                  </Item>
                  <Item floatingLabel>
                    <Label
                      style={styles.labelFont}
                    >Password</Label>
                    <Input
                      style={styles.labelFont}
                      secureTextEntry={true}
                      autoCorrect={false}
                      autoCapitalize='none'
                      onChangeText={(password) => this.setState({ password })}
                    />
                  </Item>
                  <View style={styles.buttonWrap}>
                    <Button
                      full
                      rounded
                      light
                      bordered
                      onPress={() => this.logInUser(this.state.email, this.state.password)}
                    >

                      <Text style={styles.labelFont}>Login</Text>
                    </Button>
                    <Button
                      full
                      bordered
                      light
                      rounded

                      onPress={() => this.signUpUser(this.state.email, this.state.password)}
                    >
                      <Text style={styles.labelFont}>Signup</Text>
                    </Button>
                    <Button
                      onPress={() => this.loginWithPlanning()}
                    >
                      <Text style={{ color: '#fff', width: '100%', fontWeight: '700', textAlign: 'center' }}>
                        {'Sign In with Planning Center'}
                      </Text>
                    </Button>
                  </View>
                </Form>
              </Container>
            </View></View>
        </KeyboardAvoidingView>
      </ImageBackground>

    );
  }
}
export default componentName;

const styles = StyleSheet.create({
  buttonWrap: {
    marginTop: 30,
  },

  container: {
    backgroundColor: 'transparent',
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'flex-start'
  },
  labelFont: {
    color: 'white',
  }
});