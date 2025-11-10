import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/HomeScreen';
import Library from '../screens/HomeScreen';
import Playlist from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Library}  options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={Playlist} />
    </Stack.Navigator>
  );
}
