import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../Theme/Colors';

const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.TopBackground3,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  ContainerEnd: {
    backgroundColor: Colors.BackgroundOptions1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '50%',
    borderTopLeftRadius: 90,
    borderBottomLeftRadius: 90,
    paddingVertical: 20,
  },
  View: {
    width: '90%',
    height: '20%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    top: -55,
  },
  LogoSamu: {
    width: width * 0.29,
    height: height * 0.145,
    marginRight: '8%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16.4,
    color: Colors.TopBackground2,
    position: 'absolute',
    left: 0,
    bottom: 0,
    paddingBottom: '8%',
    paddingLeft: '6%',
  },
  TextTitle: {
    color: Colors.TitleText,
    alignSelf: 'center',
    fontSize: 28,
    top: -25,
    fontWeight: 'bold',
  },
  BackButton: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: '10%',
    paddingLeft: '5%',
  },
});

export default Style;
