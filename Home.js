import React from 'react';
import { View } from 'react-native';
import Welcome from './components/Welcome';
import ImageText from './components/ImageText';
import EnterButton from './components/EnterButton';

export default function Home() {
  return (
    <View style={{ flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
      <Welcome name="Yago" />
      <ImageText imageLink='https://reactnative.dev/img/tiny_logo.png' text="Clique aqui para acessar" />
      <EnterButton color="blue" />
    </View>
  )
}
