import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Style from './Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../../Theme/Colors';
import {useNavigation} from '@react-navigation/native';
import DetailsScreenNavigationProp from '../../../Routes/Interface/Router.interface';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs, {Dayjs} from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import AsyncStorage from '@react-native-async-storage/async-storage';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Sao_Paulo');

function IncidentReport(): React.JSX.Element {
  const [stateCalendar, setStateCalendar] = useState(false);
  const [date, setDate] = useState<Dayjs>(dayjs());
  const [password, setPassword] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [requester, setRequester] = useState('');
  const [protocol, setProtocol] = useState('');
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handlePressBack = () => {
    navigation.goBack();
  };

  const handleDateChange = (params: {date: Date}) => {
    if (params?.date) {
      setDate(dayjs(params.date).tz('America/Sao_Paulo'));
      setStateCalendar(false);
    }
  };

  const toggleCalendar = () => {
    setStateCalendar(prevState => !prevState);
  };

  const saveData = async () => {
    try {
      const data = {
        password,
        date: date,
        time,
        address,
        requester,
        protocol,
      };

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
            <Text style={Style.TextScreen}>Boletim de Atendimento</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={Style.ScrollViewContent}>
          <View style={Style.Form}>
            <View style={Style.InputContainerContext}>
              <View style={Style.InputContainerUP}>
                <Text style={Style.Label}>Senha da CRM</Text>
                <TextInput
                  keyboardType="default"
                  onChangeText={setPassword}
                  placeholderTextColor={Colors.Placeholder}
                  value={password}
                  style={Style.InputUp}
                  autoCapitalize="none"
                  secureTextEntry
                  accessibilityLabel="Senha da CRM"
                />
              </View>
              <Image
                source={require('../../../Assets/Icons/API.png')}
                style={Style.LogoAPI}
              />
            </View>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>Data</Text>
              <View style={Style.Calendar}>
                <View style={Style.CalendarInput}>
                  <TextInput
                    placeholder="    /    /    "
                    keyboardType="numeric"
                    onChangeText={() => setDate}
                    placeholderTextColor={Colors.Placeholder}
                    value={date.format('DD/MM/YYYY')}
                    style={Style.Input}
                    accessible
                    accessibilityLabel="Data"
                  />
                </View>
                <View style={Style.InputButton}>
                  <TouchableOpacity
                    onPress={toggleCalendar}
                    accessible
                    accessibilityLabel="Abrir calendário">
                    <Ionicons
                      name="calendar-outline"
                      size={24}
                      color="#000000"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {stateCalendar && (
              <View style={Style.DateTimePicker}>
                <DateTimePicker
                  startDate={date.toDate()}
                  selectedItemColor={'#258963'}
                  mode="single"
                  date={date.toDate()}
                  onChange={params => {
                    if (params?.date) {
                      handleDateChange({date: params.date as Date});
                    }
                  }}
                />
              </View>
            )}
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>Hora</Text>
              <TextInput
                placeholder=""
                keyboardType="default"
                onChangeText={setTime}
                placeholderTextColor={Colors.Placeholder}
                value={time}
                style={Style.Input}
                accessible
                accessibilityLabel="Hora"
              />
            </View>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>Endereço</Text>
              <TextInput
                placeholder=""
                keyboardType="default"
                onChangeText={setAddress}
                placeholderTextColor={Colors.Placeholder}
                value={address}
                style={Style.Input}
                accessible
                accessibilityLabel="Endereço"
              />
            </View>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>Solicitante</Text>
              <TextInput
                placeholder=""
                keyboardType="default"
                onChangeText={setRequester}
                placeholderTextColor={Colors.Placeholder}
                value={requester}
                style={Style.Input}
                accessible
                accessibilityLabel="Solicitante"
              />
            </View>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>Protocolo</Text>
              <TextInput
                placeholder=""
                keyboardType="default"
                onChangeText={setProtocol}
                placeholderTextColor={Colors.Placeholder}
                value={protocol}
                style={Style.Input}
                accessible
                accessibilityLabel="Protocolo"
              />
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

export default IncidentReport;
