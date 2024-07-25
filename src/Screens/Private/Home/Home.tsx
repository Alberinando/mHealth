import {Image, StatusBar, View, Text} from 'react-native';
import React from 'react';
import Style from './Style';
import Button from '../../../Components/Button/Button';
import {useNavigation} from '@react-navigation/native';
import DetailsScreenNavigationProp from '../../../Routes/Interface/Router.interface';

function Home(): React.JSX.Element {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handlePressSettings = () => {
    navigation.navigate('Intervention');
  };

  const handlePressMonitoring = () => {
    navigation.navigate('Monitoring');
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
        <View style={Style.View}>
          <Image
            source={require('../../../Assets/Img/LogoSAMU.png')}
            style={Style.LogoSamu}
          />
        </View>
        <View style={Style.ContainerEnd}>
          <Button text={'Intervenção'} Prop={handlePressSettings} />
          <Button text={'Monitoramento'} Prop={handlePressMonitoring} />
          <Text style={Style.text}>mHealth</Text>
        </View>
      </View>
    </>
  );
}

export default Home;
