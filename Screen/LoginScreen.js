import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();

  return (
   
    <ImageBackground
      source={{
        uri:
          "https://i.pinimg.com/564x/d8/86/a5/d886a50dba86b282e4ef2d118d21904f.jpg"
      }}
      style={styles.ImageBackground}
    >
       <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
         
      <View style={styles.container}>
        <Image source = {{uri : 'https://img.icons8.com/plasticine/2x/react.png'}}
         style={styles.logo}
        >
        </Image>
        <Text style={styles.title}>REACT NATIVE</Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#666"
          underlineColorAndroid="transparent"
          style={styles.txtInput}
          onChangeText={Username => setUsername(Username)}
          value={Username}
        ></TextInput>
        <TextInput
          placeholder="Password"
          underlineColorAndroid="transparent"
          placeholderTextColor="#666"
          secureTextEntry={true}
          style={styles.txtInput}
          onChangeText={Password => setPassword(Password)}
          value={Password}
        />
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            if (Username == "admin" && Password == "admin") {
              alert('Đăng Nhập Thành Công !')
              fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                body: JSON.stringify({
                  Username: "admin",
                  Password: "admin"
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              })
                .then(response => response.json())
                .then(json => {
                  setUsername(json.Username);
                  setPassword(json.Password);
                });

              navigation.navigate("Home");
            } else {
              Alert.alert(
                'Thông Báo',
                'Vui Lòng Nhập Tên Và Mật Khẩu !',
                [
                  {
                    text: 'Thoát',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              );
            }
          }}
        >
          <Text style={styles.txtLogin}>Login</Text>
        </TouchableOpacity>
      </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
    
  );
}
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    
  },
  txtInput: {
    backgroundColor: "white",
    width: DEVICE_WIDTH - 100,
    height:DEVICE_HEIGHT - 680,
    marginHorizontal: 20,
    padding: 12,
    borderRadius: 20,
    color: "black",
    marginTop: 15
  },
  ImageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    color: "white"
  },
  txtLogin: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  },
  btnLogin: {
    width: DEVICE_WIDTH - 250,
    backgroundColor: "rgba(0,145,234,1)",
    padding: 12,
    borderRadius: 20,
    marginTop: 20
  },
  ImageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }, 
  logo:{
    width: 120,
    height : 120
  }
});
