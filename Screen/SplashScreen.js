import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxBD-LBpw35ua_71bu-bQOJhkMsOYDftSjDi2sQkIEm7MOQrdt&usqp=CAU'}}
        style={{  width:320,
          height:480,}}
      ></ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
