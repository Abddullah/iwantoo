import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import WebViewComp from '../screens/login/webview';
import Locations from '../screens/locations';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      //  title:'Test',
    }
  },
  Locations: {
    screen: Locations,
  },
  WebViewComp: { screen: WebViewComp },

};
// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',

    headerStyle: {
      backgroundColor: '#eee',
      // height: 90,
    }


  }
});

export default createAppContainer(HomeStack);