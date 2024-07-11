import {StyleSheet} from 'react-native';
import Colors from '../../Theme/Colors';

const Style = StyleSheet.create({
  Button: {
    width: '80%',
    backgroundColor: Colors.TopBackground3,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '5%',
    marginBottom: '5%',
  },
  Text: {
    fontWeight: 'bold',
    color: Colors.TitleText,
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Style;
