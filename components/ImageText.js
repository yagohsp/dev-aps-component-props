import React from 'react';
import { View, Text, Image } from 'react-native';

const ImageText = ({ text, imageLink }) => {

  return (
    <View style={{ marginBottom: 15, alignItems: 'center' }}>
      <Image
        style={{
          width: 66,
          height: 58,
          marginBottom: 5
        }}
        source={{
          uri: imageLink,
        }}
      />
      <Text>{text}</Text>
    </View>
  );
};

export default ImageText;
