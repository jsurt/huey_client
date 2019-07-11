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
import { parseString } from "react-native-xml2js";
import { BOOK_DATA_ENDPOINT } from "../../config";

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
          androidCameraPermissionOptions={{
            title: "Permission to use camera",
            message: "We need your permission to use your camera",
            buttonPositive: "Ok",
            buttonNegative: "Cancel"
          }}
          androidRecordAudioPermissionOptions={{
            title: "Permission to use audio recording",
            message: "We need your permission to use your audio",
            buttonPositive: "Ok",
            buttonNegative: "Cancel"
          }}
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
        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
          >
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
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
      const barcode = data;
      const bookInfo = await axios(BOOK_DATA_ENDPOINT + "/isbn_db/" + barcode);
      console.log(bookInfo.data.data[0].title);
      const { title, image } = bookInfo.data.data[0];
      console.log(image);
      this.props.navigation.navigate("NewBook", {
        title,
        image
      });
      this.setState({ isBarCodeRead: false });
    }
  };
}

const styles = StyleSheet.create({
  container: {
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
