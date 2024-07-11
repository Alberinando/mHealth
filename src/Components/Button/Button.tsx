import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import ButtonProps from './Types/ButtonProps';
import Style from './Style';

function Button({text, Prop}: ButtonProps) {
  return (
    <TouchableOpacity onPress={Prop} style={Style.Button}>
      <Text style={Style.Text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
