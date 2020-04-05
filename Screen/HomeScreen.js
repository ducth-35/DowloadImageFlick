import React, { useState, Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Share,
  Text,
  View,
  Alert,
  FlatList,
  Button,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import ZoomImage from "react-native-zoom-image";
import { Easing } from "react-native";
import * as MediaLibrary from "expo-media-library";

import { Ionicons, AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";

export default function Hinhnen({ navigation }) {
  const [dulieu, setdulieu] = useState();

  return (
    <ImageBackground
      source={{
        uri:
          "https://i0.wp.com/thuvienanh.net/wp-content/uploads/2019/02/hinh-nen-samsung-galaxy-1.jpg?resize=696%2C1237&ssl=1"
      }}
      style={styles.ImageBackground}
    >
      <View style={styles.container}>
        <FlatList
          data={dulieu}
          renderItem={({ item }) => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginLeft: 13,

              }}
            >
              {/* <Text style={{fontSize: 18,color: 'black', textAlign: "center",fontWeight: "bold"}} >{item.title}</Text> */}
              <ZoomImage
                source={{ uri: item.url_l }}
                imgStyle={{
                  width: Dimensions.get("screen").height / 3.7 - 12,
                  height: Dimensions.get("screen").width / 2 - 4,
                  marginTop: 10,

                }}
                duration={200}
                enableScaling={false}
                easingFunc={Easing.ease}
              ></ZoomImage>
              <Text
                style={{
                  marginTop: -20,
                  marginLeft: -30,
                  fontSize: 12,
                  color: "white",
                  marginBottom: 20,
                  fontStyle: "italic"
                }}
              >
                {" "}

                <MaterialIcons
                  name="visibility"
                  style={{ marginBottom: -10 }}
                  size={12}
                  color="white"
                ></MaterialIcons>
                <Text style={{ fontSize: 12, color: "white" }}>
                  {" "}
                  {item.views} views
                </Text>

              </Text>

              <TouchableOpacity
                style={styles.btnDowload}
                onPress={() => {
                  Alert.alert("Bạn chắc chắn muốn tải ? ", "", [
                    {
                      text: "OK",
                      onPress: () => {
                        MediaLibrary.saveToLibraryAsync(item.url_l);
                        Alert.alert("Thông Báo ", "Tải Thành Công !");
                      }
                    },
                    {
                      text: "Đóng",
                      onPress: () => console.log("Cancel Pressed"),
                      style: "cancel"
                    }
                  ]);
                }}
              >
                <Text style={styles.txtDownload}>Tải ảnh</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity>
                  <Text> share ảnh </Text>
                </TouchableOpacity> */}
            </View>
          )}
          numColumns={2}
          keyExtractor={item => item.id}
        />
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.btnXemanh}
            onPress={() => {
              fetch("https://www.flickr.com/services/rest", {
                method: "POST",
                body: new URLSearchParams({
                  api_key: "d0de649afc5b3d2d342a3419598d72d1",
                  user_id: "186966300@N06",
                  extras:
                    "views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o",
                  format: "json",
                  method: "flickr.favorites.getList",
                  nojsoncallback: "1",
                  per_page: "100",
                  page: "0"
                }).toString(),
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              })
                .then(response => response.json())
                .then(json => {
                  setdulieu(json.photos.photo);
                });
            }}
          >
            <Text style={styles.txtLogin}>Xem Ảnh</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  btnLogin: {
    width: DEVICE_WIDTH - 250,
    backgroundColor: "rgba(0,145,234,1)",
    padding: 1,
    marginTop: 5,
    borderRadius: 20,
    flex: 1,
    justifyContent: "center"
  },
  txtLogin: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold"
  },
  ImageBackground: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  },
  btnDowload: {
    width: DEVICE_WIDTH - 250,
    backgroundColor: "rgba(0,145,234,1)",
    padding: 1,
    backgroundColor: "yellow",
    borderRadius: 20
  },
  txtDownload: {
    color: "black",
    textAlign: "center"
  },
  ImageBackground: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  },
  btnXemanh: {
    width: DEVICE_WIDTH - 350,
    padding: 1,
    marginTop: 5,
    borderRadius: 20,
    flex: 1,
    justifyContent: "center"
  }
});
