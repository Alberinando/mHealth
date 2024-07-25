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
              <Text style={Style.Label}>Técnico de enfermagem</Text>
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
              <Text style={Style.Label}>Enfermeiro</Text>
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
              <Text style={Style.Label}>Condutor</Text>
              <TextInput
                placeholder="Insira o Nome"
                keyboardType="default"
                onChangeText={setConductor}
                placeholderTextColor={Colors.Placeholder}
                value={conductor}
                style={Style.Input}
              />
            </View>
            <TouchableOpacity style={Style.Button}>
              <Text style={Style.ButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
          <View style={Style.TextFooterContainer}>
            <Text style={Style.TextFooter}>mHealth</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default Team;
