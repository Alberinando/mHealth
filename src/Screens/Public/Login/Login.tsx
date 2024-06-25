import {
  Image,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Style from './Style';
import Colors from '../../../Components/Colors';

function Login(): React.JSX.Element {
  const [text, onChangeText] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <>
      <StatusBar animated={true} backgroundColor={Colors.TopBackground} />
      <View style={Style.Container}>
        <View style={Style.ContainerEnd}>
          <View style={Style.InputContainer}>
            <Text style={Style.Label}>E-mail</Text>
            <TextInput
              placeholder="Insira seu Email"
              keyboardType="default"
              onChangeText={onChangeText}
              placeholderTextColor={Colors.Placeholder}
              value={text}
              style={Style.Input}
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
            />
          </View>
          <TouchableOpacity style={Style.Button}>
            <Text style={Style.ButtonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={Style.LinkText}>Cadastrar-se Aqui</Text>
          </TouchableOpacity>
          <Image
            source={require('../../../Assets/Img/Logo Samu com Número.png')}
          />
        </View>
      </View>
    </>
  );
}

export default Login;
