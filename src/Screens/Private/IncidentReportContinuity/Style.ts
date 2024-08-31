import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../Theme/Colors';

const {width, height} = Dimensions.get('screen');

const Style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.TopBackground3,
  },
  BackButton: {
    width: width * 0.2,
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Top: {
    flexDirection: 'row',
    marginTop: '10%',
    justifyContent: 'space-between',
    paddingLeft: '5%',
    alignItems: 'center',
  },
  NameScreen: {
    backgroundColor: Colors.TopBackground,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 60,
    width: '65%',
    paddingHorizontal: '5%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  TextScreen: {
    color: Colors.TopBackground3,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: '5%',
  },
  ScrollViewContent: {
    flexGrow: 1,
  },
  Form: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  InputContainer: {
    width: '90%',
    marginBottom: 15,
  },
  InputContainerUP: {
    width: '55%',
    marginBottom: 15,
  },
  Label: {
    color: Colors.LabelText,
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginTop: '2%',
  },
  LabelOptions: {
    color: Colors.LabelText,
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginTop: '2%',
    paddingLeft: '5%',
  },
  Input: {
    backgroundColor: Colors.Input,
    borderRadius: 8,
    paddingLeft: 15,
    color: '#000000',
    width: '100%',
  },
  InputUp: {
    backgroundColor: Colors.Input,
    borderRadius: 8,
    color: '#000000',
    width: '100%',
  },
  Button: {
    width: '20%',
    alignItems: 'center',
    padding: 13,
    borderRadius: 8,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  TextFooterContainer: {
    position: 'absolute',
    alignSelf: 'flex-start',
    bottom: 10,
    left: 20,
  },
  TextFooter: {
    color: Colors.TextmHealt,
    fontWeight: 'bold',
    fontSize: 16.4,
  },
  InputContainerContext: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    alignSelf: 'flex-start',
  },
  LogoAPI: {
    width: 75,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: '5%',
    marginLeft: '5%',
  },
  Calendar: {
    flexDirection: 'row',
  },
  CalendarInput: {
    width: '100%',
  },
  InputButton: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    right: 15,
  },
  DateTimePicker: {
    flex: 1,
    backgroundColor: Colors.TopBackground,
    elevation: 5,
    borderRadius: 10,
    width: width * 0.9,
    alignItems: 'center',
    zIndex: 1,
  },
  Mandatory: {
    color: Colors.TextmHealt3,
  },
  Options: {
    alignSelf: 'flex-start',
    paddingLeft: '5%',
    marginTop: '3%',
  },
});

export default Style;
