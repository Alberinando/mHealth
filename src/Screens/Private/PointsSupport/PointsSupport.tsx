import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Style from './Style';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailsScreenNavigationProp from '../../../Routes/Interface/Router.interface';
import Colors from '../../../Theme/Colors';

function PointsSupport(): React.JSX.Element {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

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
            <Text style={Style.TextScreen}>Unidade de Resgate</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={Style.ScrollViewContent}>
          <View style={Style.TextFooterContainer}>
            <Text style={Style.TextFooter}>mHealth</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
}

export default PointsSupport;
