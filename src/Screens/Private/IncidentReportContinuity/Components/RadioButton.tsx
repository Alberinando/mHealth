import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import RadioButtonProps from './Interfaces/RadioButtonProps';
import styles from './Style';

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  value,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(value)}>
      <View style={[styles.circle, selected && styles.selectedCircle]} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
