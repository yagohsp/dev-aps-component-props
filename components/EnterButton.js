import React from 'react';
import { Button } from 'react-native';

const EnterButton = ({color}) => {

  return (
    <Button title="Entrar" color={color} onPress={() => console.log("Clicou")} />
  );
};

export default EnterButton;
