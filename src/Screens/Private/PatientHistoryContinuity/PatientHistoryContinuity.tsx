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

function PatientHistoryContinuity(): React.JSX.Element {
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [observation, setObservation] = useState('');

  const handlePressBack = () => {
    navigation.goBack();
  };

  const saveData = async () => {
    try {
      const data = {
        Peso: weight,
        Altura: height,
        Observação: observation,
      };
      await AsyncStorage.setItem('Rescue', JSON.stringify(data));
      navigation.navigate('IncidentReportContinuity');
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
            <Text style={Style.TextScreen}>História do Paciente</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={Style.ScrollViewContent}>
          <View style={Style.Form}>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>Peso estimado</Text>
              <TextInput
                placeholder="Peso"
                keyboardType="default"
                onChangeText={setWeight}
                placeholderTextColor={Colors.Placeholder}
                value={weight}
                style={Style.InputText}
              />
            </View>
          </View>
          <View style={Style.Form}>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>Altura estimada</Text>
              <TextInput
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={setHeight}
                placeholderTextColor={Colors.Placeholder}
                value={height}
                style={Style.InputText}
              />
            </View>
          </View>
          <View style={Style.Form}>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>Observações</Text>
              <TextInput
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={setObservation}
                placeholderTextColor={Colors.Placeholder}
                value={observation}
                style={Style.InputText}
              />
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

export default PatientHistoryContinuity;
