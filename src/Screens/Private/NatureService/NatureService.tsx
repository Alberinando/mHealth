import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Style from './Style';
import {useNavigation} from '@react-navigation/native';
import DetailsScreenNavigationProp from '../../../Routes/Interface/Router.interface';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../Theme/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

function NatureService(): React.JSX.Element {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handleOptionPress = async (optionName: string) => {
    try {
      await AsyncStorage.setItem('selectedOption', optionName);
      navigation.navigate('PatientHistory');
    } catch (error) {
      console.error('Error saving option to AsyncStorage:', error);
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
      <View style={Style.Container}>
        <View style={Style.Top}>
          <TouchableOpacity
            style={Style.BackButton}
            accessible
            accessibilityLabel="Voltar">
            <Ionicons name="arrow-back" color={Colors.TitleText} size={30} />
          </TouchableOpacity>
          <Text style={Style.Title}>Natureza do Atendimento</Text>
        </View>
        <View style={Style.ContainerOptions}>
          <ScrollView>
            <View style={Style.OptionsButton}>
              <TouchableOpacity
                style={Style.ButtonOption}
                onPress={() => handleOptionPress('NeoNato')}>
                <Text style={Style.TextButton}>NeoNato</Text>
                <Image
                  source={require('../../../Assets/Img/bebe.png')}
                  style={Style.img}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={Style.ButtonOption}
                onPress={() => handleOptionPress('Pediátrica')}>
                <Text style={Style.TextButton}>Pediátrica</Text>
                <Image
                  source={require('../../../Assets/Img/Crianca.png')}
                  style={Style.img}
                />
              </TouchableOpacity>
            </View>
            <View style={Style.OptionsButton}>
              <TouchableOpacity
                style={Style.ButtonOption}
                onPress={() => handleOptionPress('Obstétrica')}>
                <Text style={Style.TextButton}>Obstétrica</Text>
                <Image
                  source={require('../../../Assets/Img/bb.png')}
                  style={Style.img}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={Style.ButtonOption}
                onPress={() =>
                  handleOptionPress('Transferência remoção inter-hospitalar')
                }>
                <Text style={Style.TextButton}>
                  Transferência remoção inter-hospitalar
                </Text>
                <Image
                  source={require('../../../Assets/Img/ambulancia.png')}
                  style={Style.imgAmbulancia}
                />
              </TouchableOpacity>
            </View>
            <View style={Style.OptionsButton}>
              <TouchableOpacity
                style={Style.ButtonOption}
                onPress={() => handleOptionPress('Traumática')}>
                <Text style={Style.TextButton}>Traumática</Text>
                <Image
                  source={require('../../../Assets/Img/Bra.png')}
                  style={Style.img}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={Style.ButtonOption}
                onPress={() => handleOptionPress('Psiquiátrica')}>
                <Text style={Style.TextButton}>Psiquiátrica</Text>
                <Image
                  source={require('../../../Assets/Img/Celebro.png')}
                  style={Style.img}
                />
              </TouchableOpacity>
            </View>
            <View style={Style.OptionsButton}>
              <TouchableOpacity
                style={Style.ButtonOption}
                onPress={() => handleOptionPress('Clínica')}>
                <Text style={Style.TextButton}>Clínica</Text>
                <Image
                  source={require('../../../Assets/Img/hospital.png')}
                  style={Style.img}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={Style.ButtonOption}
                onPress={() => handleOptionPress('Outros')}>
                <Text style={Style.TextButton}>Outros</Text>
                <Image
                  source={require('../../../Assets/Img/balao.png')}
                  style={Style.imgBalao}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

export default NatureService;
