import React from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { useFonts } from 'expo-font';

const loadFonts = () => {
  const [fontsLoaded] = useFonts({
    // Poppins
    'Poppins-Thin': require('../../assets/fonts/Poppins/Poppins-Thin.ttf'),
    Poppins: require('../../assets/fonts/Poppins/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../assets/fonts/Poppins/Poppins-Bold.ttf'),
    // Raleway
    'Raleway-ExtraLight': require('../../assets/fonts/Raleway/Raleway-ExtraLight.ttf'),
    'Raleway-Light': require('../../assets/fonts/Raleway/Raleway-Light.ttf'),
    'Raleway-Thin': require('../../assets/fonts/Raleway/Raleway-Thin.ttf'),
    'Raleway-Medium': require('../../assets/fonts/Raleway/Raleway-Medium.ttf'),
    Raleway: require('../../assets/fonts/Raleway/Raleway-Regular.ttf'),
    'Raleway-SemiBold': require('../../assets/fonts/Raleway/Raleway-SemiBold.ttf'),
    'Raleway-Bold': require('../../assets/fonts/Raleway/Raleway-Bold.ttf'),
    'Raleway-ExtraBold': require('../../assets/fonts/Raleway/Raleway-ExtraBold.ttf'),
    'Raleway-Black': require('../../assets/fonts/Raleway/Raleway-Black.ttf'),
  });

  return fontsLoaded;
};

export const TestFontsComponent = () => {
  loadFonts();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Font Family Poppins</Text>
      <Text style={{ fontFamily: 'Poppins-Thin', fontSize: 30 }}>Nimloth</Text>
      <Text style={{ fontFamily: 'Poppins', fontSize: 30 }}>Nimloth</Text>
      <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 30 }}>Nimloth</Text>
    </View>
  );
};

export default loadFonts;
