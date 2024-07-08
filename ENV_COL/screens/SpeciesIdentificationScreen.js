import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';
import axios from 'axios';

const SpeciesIdentificationScreen = () => {
  const [photo, setPhoto] = useState(null);
  const [result, setResult] = useState(null);

  const takePicture = async (camera) => {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    setPhoto(data.uri);
    identifySpecies(data.base64);
  };

  const identifySpecies = async (base64Image) => {
    try {
      const response = await axios.post('http://your-server-url/identify', { image: base64Image });
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {!photo ? (
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}
        >
          {({ camera, status }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={styles.capture}>
                <Button title="Take Picture" onPress={() => takePicture(camera)} />
              </View>
            );
          }}
        </RNCamera>
      ) : (
        <View style={styles.resultContainer}>
          <Image source={{ uri: photo }} style={styles.image} />
          {result && <Text style={styles.resultText}>Species: {result.species}</Text>}
        </View>
      )}
    </View>
  );
};

const PendingView = () => (
  <View style={styles.pending}>
    <Text>Waiting</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
  },
  pending: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SpeciesIdentificationScreen;
