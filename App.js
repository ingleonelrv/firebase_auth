import React, { Component } from "react";
import { Text } from "react-native";
import AppContainer from "./src/Navigator";
import NavigationService from "./src/navigation-services";

export default class App extends Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
    // <Text>"Hola desde APP"</Text>
    {
    }
  }
}
