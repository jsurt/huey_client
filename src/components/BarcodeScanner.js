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

  async onBarCodeRead(data) {
    if (this.camera) {
      console.log(data);
      const bookInfo = await fetchByISBN(data);
      const { title, authors, thumbnails } = data;
      this.setState({ isBarCodeRead: false });
      this.props.navigation.navigate("Confirmation", {
        title,
        authors,
        thumbnails
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  }
});

export default BarcodeScanner;
