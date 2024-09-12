import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Style from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../Theme/Colors';
import {useNavigation} from '@react-navigation/native';
import DetailsScreenNavigationProp from '../../../Routes/Interface/Router.interface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import options from './Database/Opstions';
import RadioButton from './Components/RadioButton';

function IncidentReportContinuity(): React.JSX.Element {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handlePressBack = () => {
    navigation.goBack();
  };

  const handlePressNatureService = async () => {
    const option = await AsyncStorage.getItem('selectedOption');
    if (option === 'Obstétrica') {
      navigation.navigate('GestationalHistory');
    } else {
      navigation.navigate('NatureService');
    }
  };

  const saveData = async () => {
    try {
      const data = {
        name,
        age,
      };

      await AsyncStorage.setItem('NomedoPaciente', JSON.stringify(data));
      handlePressNatureService();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <StatusBar
        animated
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <KeyboardAvoidingView style={Style.Container}>
        <View style={Style.Top}>
          <TouchableOpacity
            onPress={handlePressBack}
            style={Style.BackButton}
            accessible
            accessibilityLabel="Voltar">
            <Ionicons name="arrow-back" color={Colors.TitleText} size={30} />
          </TouchableOpacity>
          <View style={Style.NameScreen}>
            <Text style={Style.TextScreen}>Boletim de Atendimento</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={Style.ScrollViewContent}>
          <View style={Style.Form}>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>
                Nome do paciente<Text style={Style.Mandatory}>*</Text>
              </Text>
              <View style={Style.CalendarInput}>
                <TextInput
                  placeholder=""
                  keyboardType="default"
                  onChangeText={setName}
                  placeholderTextColor={Colors.Placeholder}
                  value={name}
                  style={Style.Input}
                  accessible
                  accessibilityLabel="Nome do paciente"
                />
              </View>
            </View>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>
                Idade do paciente<Text style={Style.Mandatory}>*</Text>
              </Text>
              <View style={Style.Calendar}>
                <View style={Style.CalendarInput}>
                  <TextInput
                    placeholder=""
                    keyboardType="numeric"
                    onChangeText={setAge}
                    placeholderTextColor={Colors.Placeholder}
                    value={age}
                    style={Style.Input}
                    accessible
                    maxLength={3}
                    accessibilityLabel="Idade do Paciente"
                  />
                </View>
              </View>
            </View>
            <Text style={Style.LabelOptions}>Sexo do paciente:</Text>
            <View style={Style.Options}>
              {options.map(option => (
                <RadioButton
                  key={option.value}
                  label={option.label}
                  value={option.value}
                  selected={option.value === selectedValue}
                  onPress={value => setSelectedValue(value)}
                />
              ))}
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={saveData}
          style={Style.Button}
          accessible
          accessibilityLabel="Próximo">
          <Ionicons name="arrow-forward" color={Colors.TitleText} size={30} />
        </TouchableOpacity>
        <View style={Style.TextFooterContainer}>
          <Text style={Style.TextFooter}>LogSAMURN</Text>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

export default IncidentReportContinuity;
