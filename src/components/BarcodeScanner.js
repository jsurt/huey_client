"use strict";
import React, { PureComponent } from "react";
import {
  AppRegistry,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { RNCamera } from "react-native-camera";
import axios from "axios";
import { BOOK_DATA_ENDPOINT } from "../../config";
import { fetchByISBN } from "../requests/books";

class BarcodeScanner extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isBarCodeRead: false
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.auto}
          onCameraReady={() => console.log("Camera ready")}
          onBarCodeRead={e => {
            if (!this.state.isBarCodeRead) {
              console.log("BarCode detected");
              this.setState({ isBarCodeRead: true });
              this.onBarCodeRead(e.data);
            }
            return null;
          }}
          captureAudio={false}
        />
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri, "Hello there");
    }
  };

  onBarCodeRead = async data => {
    if (this.camera) {
      const bookInfo = await fetchByISBN(data);
      const { title, authors, thumbnails } = data;
      this.setState({ isBarCodeRead: false });
      this.props.navigation.navigate("Confirmation", {
        title,
        authors,
        thumbnails
      });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  }
});

export default BarcodeScanner;
