import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about'
import WebViewComp from '../screens/login/webview';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      //  title:'Test',

    }
  }, WebViewComp: {
    screen: WebViewComp,
  },

};
// home stack navigator screens
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#eee',
      height: 90,
    }
  }
});

export default AboutStack;