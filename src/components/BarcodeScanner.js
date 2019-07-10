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
              this.setState({ isBarCodeRead: true });
              console.log("BarCode detected");
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

  onBarCodeRead = data => {
    if (this.camera) {
      const barcode = data;
      this.fetchByISBN(barcode);
    }
  };

  nameToUpperCase = name => {
    return name.toUpperCase();
  };

  fetchByISBN = barcode => {
    console.log(barcode);
    axios(BOOK_DATA_ENDPOINT + "/oclc/" + barcode)
      .then(res => {
        parseString(
          res.data,
          {
            attrNameProcessors: [this.nameToUpperCase],
            attrValueProcessors: [this.nameToUpperCase]
          },
          (err, result) => {
            console.log(result);
          }
        );
      })
      .catch(err => {
        Alert.alert("Sorry, title not found. Try entering manually");
        console.error(err);
      })
      .finally(() => {
        Alert.alert("Scan complete");
        this.setState({ isBarCodeRead: false });
      });
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
