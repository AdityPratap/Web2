import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EnviroApp</Text>
      <Button title="Species Identification" onPress={() => navigation.navigate('Species Identification')} />
      <Button title="Pollution Monitoring" onPress={() => navigation.navigate('Pollution Monitoring')} />
      <Button title="Deforestation Tracking" onPress={() => navigation.navigate('Deforestation Tracking')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default HomeScreen;
