import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../Theme/Colors';

const {width, height} = Dimensions.get('window');

const Style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.TopBackground3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContainerEnd: {
    backgroundColor: Colors.TopBackground2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '75%',
    borderTopLeftRadius: 70,
    paddingVertical: 20,
  },
  View: {
    width: '90%',
    height: '20%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: '10%',
  },
  LogoSamu: {
    width: width * 0.29,
    height: height * 0.145,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16.4,
    color: Colors.TextmHealt2,
    position: 'absolute',
    left: 0,
    bottom: 0,
    paddingBottom: '8%',
    paddingLeft: '6%',
  },
});

export default Style;
