import {
  Alert,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Style from './Style';
import Colors from '../../../Theme/Colors';
import {useNavigation} from '@react-navigation/native';
import DetailsScreenNavigationProp from '../../../Routes/Interface/Router.interface';
import auth from '@react-native-firebase/auth';

function Login(): React.JSX.Element {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate('Register');
  };

  async function handleLogin() {
    if (text !== '' && password !== '') {
      await auth()
        .signInWithEmailAndPassword(text, password)
        .catch(error => {
          console.log(error);
          if (error.code === 'auth/invalid-email') {
            Alert.alert('Alerta', 'O endereço de e-mail não é válido.');
          }
          if (error.code === 'auth/invalid-email-verified') {
            Alert.alert('Alerta', 'O e-mail é inválido.');
          }
          if (error.code === 'auth/weak-password') {
            Alert.alert('Alerta', 'A senha é muito fraca.');
          }
          if (error.code === 'auth/invalid-credential') {
            Alert.alert('Alerta', 'A credencial expirou ou está mal formada.');
          }
          if (error.code === 'auth/network-request-failed') {
            Alert.alert('Alerta', 'Sem conexão com a internet');
          }
        });
    } else {
      Alert.alert('Alerta', 'Preencha os dados');
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
        <View style={Style.View}>
          <Image
            source={require('../../../Assets/Img/LogoSAMU.png')}
            style={Style.LogoSamu}
          />
          <View>
            <Text style={Style.TextLogoUp}>mHealth</Text>
            <Text style={Style.TextLogoDown}>SAMU</Text>
            <Text style={Style.TextLogoDownSamu}>RN 192</Text>
          </View>
        </View>
        <View style={Style.ContainerEnd}>
          <ScrollView
            style={Style.Scroll}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <View style={Style.Form}>
              <Text style={Style.Title}>Login</Text>
              <View style={Style.InputContainer}>
                <Text style={Style.Label}>E-mail</Text>
                <TextInput
                  placeholder="Insira seu Email"
                  keyboardType="email-address"
                  onChangeText={onChangeText}
                  inputMode="email"
                  placeholderTextColor={Colors.Placeholder}
                  value={text}
                  style={Style.Input}
                  autoCapitalize="none"
                />
              </View>
              <View style={Style.InputContainer}>
                <Text style={Style.Label}>Senha</Text>
                <TextInput
                  placeholder="Insira sua senha"
                  keyboardType="default"
                  secureTextEntry
                  placeholderTextColor={Colors.Placeholder}
                  onChangeText={onChangePassword}
                  value={password}
                  style={Style.Input}
                  autoCapitalize="none"
                />
              </View>
              <TouchableOpacity
                style={Style.Button}
                onPress={() => handleLogin()}>
                <Text style={Style.ButtonText}>Entrar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePress}>
                <Text style={Style.LinkText}>Cadastrar-se aqui!</Text>
              </TouchableOpacity>
              <Image
                source={require('../../../Assets/Img/BrasaoRN.png')}
                style={Style.Brasao}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

export default Login;
