import {StyleSheet} from 'react-native';
import Colors from '../../../../Theme/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.Input,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Input,
  },
  selectedCircle: {
    backgroundColor: '#010c1b',
    borderColor: '#010c1b',
  },
  label: {
    color: '#010c1b',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default styles;
