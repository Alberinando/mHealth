import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../Theme/Colors';

const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.TopBackground2,
    justifyContent: 'flex-end',
  },
  ContainerEnd: {
    backgroundColor: Colors.Background,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '90%',
    borderTopLeftRadius: 70,
    paddingVertical: 20,
  },
  Title: {
    color: Colors.TitleText,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 35.7,
    marginBottom: '2%',
    marginTop: '5%',
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
  },
  Button: {
    backgroundColor: Colors.ButtonSubmmit,
    width: '90%',
    alignItems: 'center',
    padding: 13,
    borderRadius: 8,
    marginTop: 20,
  },
  ButtonText: {
    fontWeight: '800',
    color: Colors.TextmHealt2,
  },
  Scroll: {
    width: '90%',
    height: '100%',
    marginTop: '1%',
  },
  Form: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gobBack: {
    alignContent: 'flex-start',
    marginLeft: '5%',
    marginVertical: 1,
  },
  ButtonContainer: {
    width: width * 0.2,
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: height * -0.00009999,
    zIndex: 1,
  },
  TextFooter: {
    color: Colors.TextmHealt,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: '3%',
    marginLeft: '2%',
  },
  itemStyle: {
    borderRadius: 8,
  },
  containerStyle: {
    borderRadius: 8,
  },
  placeholderStyle: {
    color: Colors.Placeholder,
  },
  selectedText: {
    color: Colors.TitleText,
  },
  Mandatory: {
    color: Colors.TextmHealt3,
  },
});

export default Style;
