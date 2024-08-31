import React, {useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  ToastAndroid,
} from 'react-native';
import Style from './Style';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailsScreenNavigationProp from '../../../Routes/Interface/Router.interface';
import Colors from '../../../Theme/Colors';
import {Dropdown} from 'react-native-element-dropdown';
import SupportPoint from '../../../DataBase/SupportPoint/SupportPoint';
import {TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';

function PointsSupport(): React.JSX.Element {
  const navigation = useNavigation<DetailsScreenNavigationProp>();
  const [pointSuport, setPointSuporte] = useState('');

  const handlePressBack = () => {
    navigation.goBack();
  };

  const storeData = async () => {
    try {
      if (pointSuport !== '') {
        console.log('Iniciando armazenamento de dados...');
        const team = (await AsyncStorage.getItem('Equipe')) || '{}';
        const RescueUnit = (await AsyncStorage.getItem('Rescue')) || '{}';
        const parsedTeam = JSON.parse(team);
        const parsedRescueUnit = JSON.parse(RescueUnit);
  
        console.log('Parsed Team:', parsedTeam);
        console.log('Parsed Rescue Unit:', parsedRescueUnit);
        console.log('Firestore status:', firestore().app);

        try {
          console.log('Tentando adicionar dados ao Firestore...');
          await firestore()
            .collection('IdentificationCard')
            .add({
              Ponto: pointSuport,
              Nome: parsedTeam.Nome || '',
              Enfermeiro: parsedTeam.Enfermeiro || '',
              Medico: parsedTeam.Medico || '',
              Motorista: parsedTeam.Motorista || '',
              UnidadeResgate_Tipo: parsedRescueUnit.Type || '',
              UnidadeResgate_Numero: parsedRescueUnit.Number || '',
            });
          console.log('Dados adicionados com sucesso!');
          ToastAndroid.show('Dados adicionados com sucesso!', ToastAndroid.SHORT);
          await AsyncStorage.clear();
          Alert.alert('Salvo', 'Cadastro realizado');
          navigation.navigate('Identification');
        } catch (error) {
          console.error('Erro ao adicionar documentos:', error);
          ToastAndroid.show(
            `Erro ao adicionar documentos: ${error}`,
            ToastAndroid.SHORT,
          );
        }
      } else {
        console.log('pointSuport está vazio');
      }
    } catch (e) {
      console.error('Erro ao processar dados:', e);
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
            <Text style={Style.TextScreen}>Ponto de Apoio</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={Style.ScrollViewContent}>
          <Dropdown
            value={pointSuport}
            data={SupportPoint}
            labelField={'value'}
            valueField={'key'}
            onChange={item => setPointSuporte(item.key)}
            style={Style.Input}
            itemContainerStyle={Style.itemStyle}
            containerStyle={Style.containerStyle}
            showsVerticalScrollIndicator={false}
            placeholderStyle={Style.placeholderStyle}
            selectedTextStyle={Style.selectedText}
            itemTextStyle={Style.selectedText}
            placeholder="Insira o ponto de apoio"
          />
          {pointSuport === '31' && (
            <TextInput
              style={Style.InputPoint}
              placeholder="Outro"
              keyboardType="default"
              placeholderTextColor={Colors.Placeholder}
            />
          )}
          <TouchableOpacity onPress={storeData} style={Style.Button}>
            <Ionicons
              name={'arrow-forward'}
              color={Colors.TitleText}
              size={30}
            />
          </TouchableOpacity>
          <View style={Style.TextFooterContainer}>
            <Text style={Style.TextFooter}>LogSAMURN</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default PointsSupport;
