import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
// import the different screens
import Loading from "./Containers/Loading";
import SignUpContainer from "./Containers/SignUpContainer";
import SignInContainer from "./Containers/SignInContainer";
import Main from "./Main";

const LoginNavigator = createStackNavigator(
  {
    Loading,
    SignUpContainer,
    SignInContainer
  },
  {
    initialRouteName: "Loading",
    defaultNavigationOptions: {
      // headerStyle: {
      //   backgroundColor: '#2196F3',

      // },
      headerTransparent: true
    }
  }
);

const HomeStack = createBottomTabNavigator(
  {
    Main
  },
  {
    initialRouteName: "Main"
  }
);
const SwitchNavigator = createSwitchNavigator(
  {
    //   Splash,
    Login: {
      screen: LoginNavigator
    },
    Home: {
      screen: HomeStack
    }
  },
  {
    initialRouteName: "Login"
  }
);
const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
