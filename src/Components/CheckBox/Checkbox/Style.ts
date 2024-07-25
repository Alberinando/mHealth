import {StyleSheet} from 'react-native';
import Colors from '../../../Theme/Colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: Colors.Input,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkedCheckbox: {
    backgroundColor: Colors.BackgroundOptions2,
    borderColor: Colors.BackgroundOptions2,
  },
  label: {
    fontSize: 16,
    color: Colors.TitleText,
    fontWeight: 'bold',
  },
});

export default styles;
