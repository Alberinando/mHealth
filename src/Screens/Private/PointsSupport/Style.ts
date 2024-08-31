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
    alignItems: 'center',
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
  },
  ScrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 50,
    marginTop: '5%',
  },
  Form: {
    width: '100%',
    alignItems: 'flex-start',
    paddingLeft: '10%',
  },
  InputContainer: {
    width: '90%',
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
  Input: {
    backgroundColor: Colors.Input,
    borderRadius: 8,
    padding: 10,
    color: '#000000',
    width: '80%',
  },
  InputPoint: {
    backgroundColor: Colors.Input,
    borderRadius: 8,
    padding: 10,
    color: '#000000',
    width: '80%',
    marginTop: '3%',
  },
  Button: {
    width: '20%',
    alignItems: 'center',
    padding: 13,
    borderRadius: 8,
    marginTop: 5,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  ButtonText: {
    fontWeight: '800',
    color: Colors.TextmHealt2,
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
  InputText: {
    backgroundColor: Colors.Input,
    borderRadius: 8,
    paddingLeft: 15,
    color: '#000000',
  },
  itemStyle: {
    borderRadius: 8,
  },
  placeholderStyle: {
    color: Colors.Placeholder,
  },
  selectedText: {
    color: Colors.TitleText,
  },
  containerStyle: {
    borderRadius: 8,
    marginTop: '0.1%',
    backgroundColor: Colors.Input,
    paddingHorizontal: '2%',
  },
});

export default Style;
