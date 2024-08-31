import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../../../Theme/Colors';

const {width, height} = Dimensions.get('screen');

const Style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.TopBackground3,
  },
  Title: {
    color: Colors.TitleText,
    fontWeight: '700',
    fontSize: 18,
    marginLeft: width * 0.06,
  },
  Top: {
    flexDirection: 'row',
    marginTop: '10%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  BackButton: {
    width: width * 0.2,
    height: height * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextScreen: {
    color: Colors.TopBackground3,
    fontWeight: 'bold',
    fontSize: 18,
  },
  OptionsButton: {
    flexDirection: 'row',
    marginTop: '2%',
  },
  img: {
    width: 40,
    height: 40,
  },
  imgAmbulancia: {
    width: 60,
    height: 40,
  },
  imgBalao: {
    width: 68,
    height: 40,
  },
  TextButton: {
    color: '#FFFFFF',
    textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 15,
    marginBottom: '3%',
  },
  ButtonOption: {
    backgroundColor: Colors.TopBackground,
    width: width * 0.4,
    height: height * 0.18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%',
    marginHorizontal: '2.5%',
    borderRadius: 15,
    paddingHorizontal: '2%',
  },
  ContainerOptions: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '5%',
  },
});

export default Style;
