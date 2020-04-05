import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Screen/LoginScreen";
import HomeScreen from "./Screen/HomeScreen";
import SplashScreen from "./Screen/SplashScreen";

const Stack = createStackNavigator();

export default class App extends Component {
  state = {
    Login: true,
    isLoading: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    return (
      <NavigationContainer>
        {this.state.isLoading ? (
          <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen} options={{
            headerShown: false,               
            }} />
          </Stack.Navigator>
        ) : !this.state.Login ? (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: "Đăng nhập",
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#1e90ff" },
              }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: "Kho ảnh",
                headerTintColor: "white",
                headerStyle: { backgroundColor: "#1e90ff" },
              }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    );
  }
}
