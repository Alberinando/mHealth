import React, {useState} from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../../Theme/Colors';
import Style from './Style';
import DetailsScreenNavigationProp from '../../../Routes/Interface/Router.interface';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dropdown} from 'react-native-element-dropdown';
import Professions from '../../../DataBase/Professions/Professions';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

function Register(): React.JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [coren, setCoren] = useState('');
  const [office, setOffice] = useState('');
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handlePress = () => {
    navigation.goBack();
  };

  async function handleLogin() {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  }

  const addData = async () => {
    try {
      await firestore().collection('User').add({
        Nome: name,
        Email: email,
        COREN: coren,
        Office: office,
      });
      ToastAndroid.show('Dados adicionados com sucesso!', ToastAndroid.SHORT);
    } catch (error) {
      ToastAndroid.show(
        `Erro ao adicionar documentos:${error}`,
        ToastAndroid.SHORT,
      );
      console.error('Erro ao adicionar documentos:', error);
    }
  };

  function SignUp() {
    if (
      name !== '' &&
      email !== '' &&
      password !== '' &&
      coren !== '' &&
      office !== ''
    ) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          addData();
          handleLogin();
        })
        .catch(error => {
          console.log(error);
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert(
              'Alerta',
              'Já existi uma conta com o endereço de email fornecido.',
            );
          }
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Alerta', 'O endereço de e-mail não é válido.');
          }
          if (error.code === 'auth/invalid-email-verified') {
            Alert.alert('Alerta', 'O e-mail é inválido.');
          }
          if (error.code === 'auth/weak-password') {
            Alert.alert('Alerta', 'A senha é muito fraca.');
          }
        });
    } else {
      Alert.alert('Alerta', 'Preencha os campos');
    }
  }

  return (
    <>
      <View style={Style.Container}>
        <StatusBar
          animated={true}
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}
        />
        <TouchableOpacity onPress={handlePress} style={Style.ButtonContainer}>
          <Ionicons
            name={'arrow-back-outline'}
            size={30}
            color={'#FFFFFF'}
            style={Style.gobBack}
          />
        </TouchableOpacity>
        <View style={Style.ContainerEnd}>
          <ScrollView
            style={Style.Scroll}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={Style.Form}>
              <Text style={Style.Title}>Crie sua conta</Text>
              <View style={Style.InputContainer}>
                <Text style={Style.Label}>
                  Nome<Text style={Style.Mandatory}>*</Text>
                </Text>
                <TextInput
                  placeholder="Insira seu Nome"
                  keyboardType="default"
                  onChangeText={setName}
                  placeholderTextColor={Colors.Placeholder}
                  value={name}
                  style={Style.Input}
                />
              </View>
              <View style={Style.InputContainer}>
                <Text style={Style.Label}>
                  E-mail<Text style={Style.Mandatory}>*</Text>
                </Text>
                <TextInput
                  placeholder="Insira seu E-mail"
                  keyboardType="email-address"
                  placeholderTextColor={Colors.Placeholder}
                  onChangeText={setEmail}
                  inputMode="email"
                  value={email}
                  style={Style.Input}
                />
              </View>
              <View style={Style.InputContainer}>
                <Text style={Style.Label}>
                  Senha<Text style={Style.Mandatory}>*</Text>
                </Text>
                <TextInput
                  placeholder="Insira sua Senha"
                  keyboardType="default"
                  secureTextEntry={true}
                  placeholderTextColor={Colors.Placeholder}
                  onChangeText={setPassword}
                  value={password}
                  style={Style.Input}
                />
              </View>
              <View style={Style.InputContainer}>
                <Text style={Style.Label}>
                  Conselho de classe<Text style={Style.Mandatory}>*</Text>
                </Text>
                <TextInput
                  placeholder="Insira seu conselho de classe"
                  keyboardType="default"
                  placeholderTextColor={Colors.Placeholder}
                  onChangeText={setCoren}
                  value={coren}
                  style={Style.Input}
                />
              </View>
              <View style={Style.InputContainer}>
                <Text style={Style.Label}>Cargo</Text>
                <Dropdown
                  data={Professions}
                  labelField="value"
                  valueField="key"
                  onChange={item => setOffice(item.key)}
                  placeholder="Insira seu cargo"
                  value={office}
                  style={Style.Input}
                  itemContainerStyle={Style.itemStyle}
                  containerStyle={Style.containerStyle}
                  showsVerticalScrollIndicator={false}
                  placeholderStyle={Style.placeholderStyle}
                  selectedTextStyle={Style.selectedText}
                  itemTextStyle={Style.selectedText}
                />
              </View>
              <TouchableOpacity style={Style.Button} onPress={SignUp}>
                <Text style={Style.ButtonText}>Entrar</Text>
              </TouchableOpacity>
            </View>
            <Text style={Style.TextFooter}>LogSAMURN</Text>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

export default Register;
