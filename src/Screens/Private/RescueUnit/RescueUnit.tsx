import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Style from './Style';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailsScreenNavigationProp from '../../../Routes/Interface/Router.interface';
import Colors from '../../../Theme/Colors';
import Checkbox from '../../../Components/CheckBox/Checkbox/Checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RescueUnit(): React.JSX.Element {
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [usa, setUsa] = useState('');
  const [usb, setUsb] = useState('');
  const [vir, setVir] = useState('');
  const [aircraft, setAircraft] = useState('');

  useEffect(() => {
    const loadStoredData = async () => {
      try {
        const storedOption = await AsyncStorage.getItem('selectedOption');
        const storedNumber = await AsyncStorage.getItem('selectedNumber');

        if (storedOption && storedNumber) {
          setSelectedOption(storedOption);
          switch (storedOption) {
            case 'USA':
              setUsa(storedNumber);
              break;
            case 'USB':
              setUsb(storedNumber);
              break;
            case 'VIR':
              setVir(storedNumber);
              break;
            case 'AERONAVE':
              setAircraft(storedNumber);
              break;
            default:
              break;
          }
        }
      } catch (error) {
        console.error('Failed to load stored data', error);
      }
    };

    loadStoredData();
  }, []);

  const handlePressBack = () => {
    navigation.goBack();
  };

  const handleCheckboxChange = (option: string) => {
    setSelectedOption(prevOption => {
      if (prevOption === option) {
        return null; // Deselect if the same option is selected again
      }
      // Clear all fields when a new option is selected
      setUsa('');
      setUsb('');
      setVir('');
      setAircraft('');
      return option;
    });
  };

  const handleTextChange = (text: string, option: string) => {
    setSelectedOption(option);
    // Clear other fields and update the selected field
    switch (option) {
      case 'USA':
        setUsa(text);
        setUsb('');
        setVir('');
        setAircraft('');
        break;
      case 'USB':
        setUsa('');
        setUsb(text);
        setVir('');
        setAircraft('');
        break;
      case 'VIR':
        setUsa('');
        setUsb('');
        setVir(text);
        setAircraft('');
        break;
      case 'AERONAVE':
        setUsa('');
        setUsb('');
        setVir('');
        setAircraft(text);
        break;
      default:
        break;
    }
  };

  const handleSave = async () => {
    try {
      if (selectedOption) {
        let number = '';
        switch (selectedOption) {
          case 'USA':
            number = usa;
            break;
          case 'USB':
            number = usb;
            break;
          case 'VIR':
            number = vir;
            break;
          case 'AERONAVE':
            number = aircraft;
            break;
          default:
            break;
        }
        if (number !== '') {
          let Date = {
            Type: selectedOption,
            Number: number,
          };
          await AsyncStorage.setItem('Rescue', JSON.stringify(Date));
          navigation.navigate('PointsSupport');
        }
      } else {
        Alert.alert('Error', 'Please select an option');
      }
    } catch (error) {
      console.error('Failed to save data', error);
      Alert.alert('Error', 'Failed to save data');
    }
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent={true}
      />
      <KeyboardAvoidingView
        style={Style.Container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={Style.Top}>
          <TouchableOpacity onPress={handlePressBack} style={Style.BackButton}>
            <Ionicons
              name={'arrow-back'}
              color={Colors.TitleText}
              size={30}
              style={Style.BackButton}
            />
          </TouchableOpacity>
          <View style={Style.NameScreen}>
            <Text style={Style.TextScreen}>Unidade de Resgate</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={Style.ScrollViewContent}>
          <View style={Style.Form}>
            <Checkbox
              label={'USA'}
              checked={selectedOption === 'USA'}
              onChange={() => handleCheckboxChange('USA')}
            />
            <View style={Style.InputContainer}>
              <TextInput
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={text => handleTextChange(text, 'USA')}
                placeholderTextColor={Colors.Placeholder}
                value={usa}
                style={Style.InputText}
                editable={selectedOption === 'USA'}
              />
            </View>
          </View>
          <View style={Style.Form}>
            <Checkbox
              label={'USB'}
              checked={selectedOption === 'USB'}
              onChange={() => handleCheckboxChange('USB')}
            />
            <View style={Style.InputContainer}>
              <TextInput
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={text => handleTextChange(text, 'USB')}
                placeholderTextColor={Colors.Placeholder}
                value={usb}
                style={Style.InputText}
                editable={selectedOption === 'USB'}
              />
            </View>
          </View>
          <View style={Style.Form}>
            <Checkbox
              label={'VIR'}
              checked={selectedOption === 'VIR'}
              onChange={() => handleCheckboxChange('VIR')}
            />
            <View style={Style.InputContainer}>
              <TextInput
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={text => handleTextChange(text, 'VIR')}
                placeholderTextColor={Colors.Placeholder}
                value={vir}
                style={Style.InputText}
                editable={selectedOption === 'VIR'}
              />
            </View>
          </View>
          <View style={Style.Form}>
            <Checkbox
              label={'AERONAVE'}
              checked={selectedOption === 'AERONAVE'}
              onChange={() => handleCheckboxChange('AERONAVE')}
            />
            <View style={Style.InputContainer}>
              <TextInput
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={text => handleTextChange(text, 'AERONAVE')}
                placeholderTextColor={Colors.Placeholder}
                value={aircraft}
                style={Style.InputText}
                editable={selectedOption === 'AERONAVE'}
              />
            </View>
            <TouchableOpacity style={Style.Button} onPress={handleSave}>
              <Ionicons
                name={'arrow-forward'}
                color={Colors.TitleText}
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View style={Style.TextFooterContainer}>
            <Text style={Style.TextFooter}>LogSAMURN</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default RescueUnit;
