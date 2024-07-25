import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../Theme/Colors';
import CheckboxProps from '../Interfaces/CheckboxProps';
import styles from './Style';

const Checkbox: React.FC<CheckboxProps> = ({label, checked, onChange}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onChange}>
      <View style={[styles.checkbox, checked && styles.checkedCheckbox]}>
        {checked && (
          <Ionicons name="checkmark" size={20} color={Colors.TopBackground3} />
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
