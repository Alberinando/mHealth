import {Image, StatusBar, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Style from './Style';
import Button from '../../../Components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailsScreenNavigationProp from '../../../Routes/Interface/Router.interface';
import Colors from '../../../Theme/Colors';

function Identification(): React.JSX.Element {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handlePressPointsSupport = () => {
    navigation.navigate('PointsSupport');
  };

  const handlePressTeam = () => {
    navigation.navigate('Team');
  };

  const handlePressRescueUnit = () => {
    navigation.navigate('RescueUnit');
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
        <Text style={Style.TextTitle}>Identificação</Text>
        <View style={Style.ContainerEnd}>
          <Button text={'Equipe'} Prop={handlePressTeam} />
          <Button text={'Unidade de Resgate'} Prop={handlePressRescueUnit} />
          <Button text={'Ponto de Apoio'} Prop={handlePressPointsSupport} />
        </View>
        <Text style={Style.text}>MHealth</Text>
      </View>
    </>
  );
}

export default Identification;
