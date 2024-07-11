import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../Theme/Colors';

const {width, height} = Dimensions.get('screen');

const Style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.TopBackground,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ContainerEnd: {
    backgroundColor: Colors.Background,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '69%',
    borderTopRightRadius: 70,
    paddingVertical: 20,
  },
  InputContainer: {
    width: '90%',
    marginBottom: 15,
  },
  Button: {
    backgroundColor: Colors.ButtonSubmmit,
    width: '90%',
    alignItems: 'center',
    padding: 13,
    borderRadius: 8,
    marginTop: 10,
  },
  ButtonText: {
    fontWeight: '800',
    color: Colors.TextmHealt2,
  },
  Label: {
    color: Colors.LabelText,
    fontWeight: '400',
    fontSize: 14,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  Input: {
    backgroundColor: Colors.Input,
    borderRadius: 8,
    padding: 10,
    color: '#000000',
  },
  LinkText: {
    color: Colors.LabelText,
    fontWeight: '400',
    fontSize: 14,
    marginTop: 20,
  },
  LogoSamu: {
    width: width * 0.315,
    height: height * 0.145,
  },
  TextLogoUp: {
    textAlign: 'left',
    marginLeft: '10%',
    fontSize: 23.6,
    color: Colors.TextmHealt,
    fontWeight: 'bold',
    marginBottom: '-8%',
  },
  TextLogoDown: {
    textAlign: 'left',
    marginLeft: '10%',
    fontSize: 23.6,
    color: Colors.TextmHealt3,
    fontWeight: 'bold',
  },
  TextLogoDownSamu: {
    textAlign: 'left',
    marginLeft: '10%',
    fontSize: 23.6,
    color: Colors.TextmHealt3,
    fontWeight: 'bold',
    marginTop: -10,
  },
  View: {
    width: '90%',
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10%',
  },
  Title: {
    color: Colors.TitleText,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: '5%',
    fontWeight: 'bold',
    fontSize: 35.7,
    marginBottom: '10%',
    marginTop: '5%',
  },
  Brasao: {
    width: width * 0.3,
    height: height * 0.12,
    marginTop: '2%',
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
});

export default Style;
