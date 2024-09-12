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
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs, {Dayjs} from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RadioButton from '../IncidentReportContinuity/Components/RadioButton';
import Options from './Components/Options';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('America/Sao_Paulo');

function GestationalHistory(): React.JSX.Element {
  const [stateCalendar, setStateCalendar] = useState(false);
  const [stateCalendarTwo, setStateCalendarTwo] = useState(false);
  const [stateCalendarThree, setStateCalendarThree] = useState(false);
  const [date, setDate] = useState<Dayjs>(dayjs());
  const [dateTwo, setDateTwo] = useState<Dayjs>(dayjs());
  const [dateThree, setDateThree] = useState<Dayjs>(dayjs());
  const [age, setAge] = useState('');
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [requester, setRequester] = useState('');
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

  const handleDateChangeTwo = (params: {date: Date}) => {
    if (params?.date) {
      setDateTwo(dayjs(params.date).tz('America/Sao_Paulo'));
      setStateCalendarTwo(false);
    }
  };

  const handleDateChangeThree = (params: {date: Date}) => {
    if (params?.date) {
      setDateThree(dayjs(params.date).tz('America/Sao_Paulo'));
      setStateCalendarTwo(false);
    }
  };

  const toggleCalendar = () => {
    setStateCalendar(prevState => !prevState);
  };

  const toggleCalendarTwo = () => {
    setStateCalendarTwo(prevState => !prevState);
  };

  const toggleCalendarThree = () => {
    setStateCalendarThree(prevState => !prevState);
  };

  const saveData = async () => {
    try {
      const data = {
        date: date,
        age,
        requester,
      };

      await AsyncStorage.setItem('TelaInicial', JSON.stringify(data));
      navigation.navigate('PhysicalExamAirways');
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
            <Text style={Style.TextScreen}>História gestacional</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={Style.ScrollViewContent}>
          <View style={Style.Form}>
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>DUM</Text>
              <View style={Style.Calendar}>
                <View style={Style.CalendarInput}>
                  <TextInput
                    placeholder=""
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
                  calendarTextStyle={Style.calendarTextStyle}
                  headerTextStyle={Style.calendarTextStyle}
                  headerButtonColor={'#FFFFFF'}
                  weekDaysTextStyle={Style.calendarTextStyle}
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
              <Text style={Style.Label}>IDADE GESTACIONAL</Text>
              <TextInput
                placeholder="Idade Gestacional"
                keyboardType="default"
                onChangeText={setAge}
                placeholderTextColor={Colors.Placeholder}
                value={age}
                style={Style.Input}
                accessible
                accessibilityLabel="IDADE GESTACIONAL "
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
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>GESTA/PARA/ABORTO</Text>
              <View style={Style.Calendar}>
                <View style={Style.CalendarInput}>
                  <TextInput
                    placeholder=""
                    keyboardType="numeric"
                    onChangeText={() => setDate}
                    placeholderTextColor={Colors.Placeholder}
                    value={dateTwo.format('DD/MM/YYYY')}
                    style={Style.Input}
                    accessible
                    accessibilityLabel="Data"
                  />
                </View>
                <View style={Style.InputButton}>
                  <TouchableOpacity
                    onPress={toggleCalendarTwo}
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
            {stateCalendarTwo && (
              <View style={Style.DateTimePicker}>
                <DateTimePicker
                  startDate={dateTwo.toDate()}
                  selectedItemColor={'#258963'}
                  calendarTextStyle={Style.calendarTextStyle}
                  headerTextStyle={Style.calendarTextStyle}
                  headerButtonColor={'#FFFFFF'}
                  weekDaysTextStyle={Style.calendarTextStyle}
                  mode="single"
                  date={dateTwo.toDate()}
                  onChange={params => {
                    if (params?.date) {
                      handleDateChangeTwo({date: params.date as Date});
                    }
                  }}
                />
              </View>
            )}
            <View style={Style.InputContainer}>
              <Text style={Style.Label}>
                COMORBIDADES/intercorrências na gestação
              </Text>
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
          </View>
          <View style={Style.InputContainer}>
            <Text style={Style.Label}>GESTA/PARA/ABORTO</Text>
            <View style={Style.Calendar}>
              <View style={Style.CalendarInput}>
                <TextInput
                  placeholder=""
                  keyboardType="numeric"
                  onChangeText={() => setDate}
                  placeholderTextColor={Colors.Placeholder}
                  value={dateTwo.format('DD/MM/YYYY')}
                  style={Style.Input}
                  accessible
                  accessibilityLabel="Data"
                />
              </View>
              <View style={Style.InputButton}>
                <TouchableOpacity
                  onPress={toggleCalendarThree}
                  accessible
                  accessibilityLabel="Abrir calendário">
                  <Ionicons name="calendar-outline" size={24} color="#000000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {stateCalendarThree && (
            <View style={Style.DateTimePicker}>
              <DateTimePicker
                startDate={dateThree.toDate()}
                selectedItemColor={'#258963'}
                calendarTextStyle={Style.calendarTextStyle}
                headerTextStyle={Style.calendarTextStyle}
                headerButtonColor={'#FFFFFF'}
                weekDaysTextStyle={Style.calendarTextStyle}
                mode="single"
                date={dateTwo.toDate()}
                onChange={params => {
                  if (params?.date) {
                    handleDateChangeThree({date: params.date as Date});
                  }
                }}
              />
            </View>
          )}
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

export default GestationalHistory;
