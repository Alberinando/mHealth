import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Style from './Style';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DetailsScreenNavigationProp from '../../../Routes/Interface/Router.interface';
import Colors from '../../../Theme/Colors';

function Team(): React.JSX.Element {
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const [name, setName] = useState('');
  const [nurse, setNurse] = useState('');
  const [doctor, setDoctor] = useState('');
  const [conductor, setConductor] = useState('');

  const handlePressBack = () => {
    navigation.goBack();
  };

  const storeData = async () => {
    try {
      if (name !== '' && nurse !== '' && conductor !== '') {
        let Date = {
          Nome: name,
          Enfermeiro: nurse,
          Medico: doctor,
          Motorista: conductor,
        };
        await AsyncStorage.setItem('Equipe', JSON.stringify(Date));
        navigation.navigate('RescueUnit');
      }
    } catch (e) {
      console.error(e);
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
            <Text style={Style.TextScreen}>Equipe Tripulante</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={Style.ScrollViewContent}>
          <View style={Style.Form}>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>
                Técnico de enfermagem<Text style={Style.Mandatory}>*</Text>
              </Text>
              <TextInput
                placeholder="Insira o Nome"
                keyboardType="default"
                onChangeText={setName}
                placeholderTextColor={Colors.Placeholder}
                value={name}
                style={Style.Input}
              />
            </View>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>
                Enfermeiro<Text style={Style.Mandatory}>*</Text>
              </Text>
              <TextInput
                placeholder="Insira o Nome"
                keyboardType="default"
                onChangeText={setNurse}
                placeholderTextColor={Colors.Placeholder}
                value={nurse}
                style={Style.Input}
              />
            </View>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>Médico</Text>
              <TextInput
                placeholder="Insira o Nome"
                keyboardType="default"
                onChangeText={setDoctor}
                placeholderTextColor={Colors.Placeholder}
                value={doctor}
                style={Style.Input}
              />
            </View>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>
                Condutor<Text style={Style.Mandatory}>*</Text>
              </Text>
              <TextInput
                placeholder="Insira o Nome"
                keyboardType="default"
                onChangeText={setConductor}
                placeholderTextColor={Colors.Placeholder}
                value={conductor}
                style={Style.Input}
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity onPress={storeData} style={Style.Button}>
          <Ionicons name={'arrow-forward'} color={Colors.TitleText} size={30} />
        </TouchableOpacity>
        <View style={Style.TextFooterContainer}>
          <Text style={Style.TextFooter}>LogSAMURN</Text>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

export default Team;
