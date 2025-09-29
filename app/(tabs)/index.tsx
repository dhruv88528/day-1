import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Img from '../pages/Img';

export default function HomeScreen() {
  return (
    <Img />
   
  );
}

const indexStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    color: "black"
  },
  text:{
    color: "black"
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 16,
    borderRadius: 100,
  },
  view1:{
    height: 50,
    width: 50,
    backgroundColor: "blue"
  },
  view2:{
    height: 50,
    width: 50,
    backgroundColor: "red",
    
  }
});
