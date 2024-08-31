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
import Checkbox from '../../../Components/CheckBox/Checkbox/Checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

function PatientHistory(): React.JSX.Element {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const [patologias, setPatologias] = useState('');
  const [patologiasNegadas, setPatologiasNegadas] = useState(false);

  const [medicacoes, setMedicacoes] = useState('');
  const [medicacoesNegadas, setMedicacoesNegadas] = useState(false);

  const [alergia, setAlergia] = useState('');
  const [alergiaNegada, setAlergiaNegada] = useState(false);

  const [sintomas, setSintomas] = useState('');
  const [sintomasNegados, setSintomasNegados] = useState(false);

  const handlePressBack = () => {
    navigation.goBack();
  };

  const saveData = async () => {
    try {
      const data = {
        patologias: {
          Type: patologiasNegadas ? 'Negou' : patologias,
        },
        medicacoes: {
          Type: medicacoesNegadas ? 'Nega' : medicacoes,
        },
        alergia: {
          Type: alergiaNegada ? 'Nega' : alergia,
        },
        sintomas: {
          Type: sintomasNegados ? 'Nega' : sintomas,
        },
      };

      await AsyncStorage.setItem('Rescue', JSON.stringify(data));

      navigation.navigate('PatientHistoryContinuity');
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
              <Text style={Style.Label}>Patologias</Text>
              <TextInput
                placeholder="Número"
                keyboardType="numeric"
                onChangeText={setPatologias}
                placeholderTextColor={Colors.Placeholder}
                value={patologias}
                style={Style.InputText}
                editable
              />
            </View>
            <Checkbox
              label={'Nega'}
              checked={patologiasNegadas}
              onChange={() => setPatologiasNegadas(!patologiasNegadas)}
            />
          </View>
          <View style={Style.Form}>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>Medicações em uso</Text>
              <TextInput
                placeholder=""
                keyboardType="default"
                onChangeText={setMedicacoes}
                placeholderTextColor={Colors.Placeholder}
                value={medicacoes}
                style={Style.InputText}
                editable
              />
            </View>
            <Checkbox
              label={'Nega'}
              checked={medicacoesNegadas}
              onChange={() => setMedicacoesNegadas(!medicacoesNegadas)}
            />
          </View>
          <View style={Style.Form}>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>Alergia</Text>
              <TextInput
                placeholder=""
                keyboardType="default"
                onChangeText={setAlergia}
                placeholderTextColor={Colors.Placeholder}
                value={alergia}
                style={Style.InputText}
                editable
              />
            </View>
            <Checkbox
              label={'Nega'}
              checked={alergiaNegada}
              onChange={() => setAlergiaNegada(!alergiaNegada)}
            />
          </View>
          <View style={Style.Form}>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>Sinais e sintomas</Text>
              <TextInput
                placeholder=""
                keyboardType="default"
                onChangeText={setSintomas}
                placeholderTextColor={Colors.Placeholder}
                value={sintomas}
                style={Style.InputText}
                editable
              />
            </View>
            <Checkbox
              label={'Nega'}
              checked={sintomasNegados}
              onChange={() => setSintomasNegados(!sintomasNegados)}
            />
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

export default PatientHistory;
