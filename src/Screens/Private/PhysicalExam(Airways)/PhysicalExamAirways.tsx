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
import AsyncStorage from '@react-native-async-storage/async-storage';
import Options from './Components/Options';
import RadioButton from '../IncidentReportContinuity/Components/RadioButton';

function PhysicalExamAirways(): React.JSX.Element {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handlePressBack = () => {
    navigation.goBack();
  };

  const saveData = async () => {
    try {
      const data = {};

      await AsyncStorage.setItem('TelaInicial', JSON.stringify(data));
      navigation.navigate('IncidentReportContinuity');
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
            <Text style={Style.TextScreen}>Exame Físico</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={Style.ScrollViewContent}>
          <View style={Style.Form}>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>Vias aéreas</Text>
              <TextInput
                placeholder=""
                keyboardType="default"
                onChangeText={undefined}
                placeholderTextColor={Colors.Placeholder}
                value={undefined}
                style={Style.Input}
                accessible
                accessibilityLabel="Solicitante"
              />
              <View style={Style.Options}>
                {Options.map(option => (
                  <RadioButton
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    selected={option.value === selectedValue}
                    onPress={value => setSelectedValue(value)}
                  />
                ))}
              </View>
            </View>
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

export default PhysicalExamAirways;
