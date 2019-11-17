import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useScreens } from 'react-native-screens';
import HandyManNavigator from './navigation/HandyManNavigator';

useScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto-black': require('./assets/fonts/Roboto-Black.ttf'),
    'roboto-blackitalic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'roboto-bolditalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
    'roboto-italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'roboto-light': require('./assets/fonts/Roboto-Light.ttf'),
    'roboto-lightitalic': require('./assets/fonts/Roboto-LightItalic.ttf'),
    'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-mediumitalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf'),
    'roboto-thinitalic': require('./assets/fonts/Roboto-ThinItalic.ttf'),
  });
};

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => { setFontLoaded(true) }} />
    );
  }
  return (
      <HandyManNavigator />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }
});
