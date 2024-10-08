import {Image, StatusBar, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Style from './Style';
import Button from '../../../Components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailsScreenNavigationProp from '../../../Routes/Interface/Router.interface';
import Colors from '../../../Theme/Colors';

function Monitoring(): React.JSX.Element {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handlePressSettings = () => {
    navigation.navigate('Settings');
  };

  const handlePress = () => {
    navigation.navigate('Settings');
  };

  const handlePressBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <View style={Style.Container}>
        <StatusBar
          animated={true}
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent={true}
        />
        <TouchableOpacity
          onPress={handlePressBack}
          style={Style.ButtonContainer}>
          <Ionicons
            name={'arrow-back'}
            color={Colors.TitleText}
            size={30}
            style={Style.BackButton}
          />
        </TouchableOpacity>
        <View style={Style.View}>
          <Image
            source={require('../../../Assets/Img/LogoSAMU.png')}
            style={Style.LogoSamu}
          />
        </View>
        <Text style={Style.TextTitle}>Monitoramento</Text>
        <View style={Style.ContainerEnd}>
          <Button text={'Configurações do aplicativo'} Prop={handlePress} />
          <Button
            text={'Pesquisar/filtrar Boletim de Ocorrência'}
            Prop={handlePressSettings}
          />
        </View>
        <Text style={Style.text}>LogSAMURN</Text>
      </View>
    </>
  );
}

export default Monitoring;
