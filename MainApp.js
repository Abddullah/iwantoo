// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import * as firebase from 'firebase';
import { firebaseConfig } from './components/config'
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


import { MaterialIcons } from '@expo/vector-icons';

//SCREENS
import Home from './screens/home'








function HomeScreen(props) {

  return (
    <Home navigation={props.navigation} />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator


        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Connect') {
              iconName = focused ? 'event' : 'event';
            } else if (route.name === 'Events') {
              iconName = focused ? 'event' : 'event';
            } else if (route.name === 'Give') {
              iconName = focused ? 'event' : 'event';
            } else if (route.name === 'Listen') {
              iconName = focused ? 'volume-up' : 'volume-up';
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
          },

        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',

        }}

      >
        <Tab.Screen name="Home" component={HomeScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
