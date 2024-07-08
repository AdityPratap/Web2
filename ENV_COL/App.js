import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SpeciesIdentificationScreen from './screens/SpeciesIdentificationScreen';
import PollutionMonitoringScreen from './screens/PollutionMonitoringScreen';
import DeforestationTrackingScreen from './screens/DeforestationTrackingScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Species Identification" component={SpeciesIdentificationScreen} />
        <Stack.Screen name="Pollution Monitoring" component={PollutionMonitoringScreen} />
        <Stack.Screen name="Deforestation Tracking" component={DeforestationTrackingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
