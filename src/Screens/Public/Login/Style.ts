import {StyleSheet} from 'react-native';
import Colors from '../../../Components/Colors';

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
    height: '75%',
    borderTopLeftRadius: 55,
    borderTopRightRadius: 150,
    paddingVertical: 20,
  },
  InputContainer: {
    width: '70%',
    marginBottom: 15,
  },
  Button: {
    backgroundColor: Colors.ButtonSubmmit,
    width: '70%',
    alignItems: 'center',
    padding: 13,
    borderRadius: 8,
    marginTop: 20,
  },
  ButtonText: {
    fontWeight: '800',
    color: Colors.TextmHealt2,
  },
  Label: {
    color: Colors.TitleText,
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
    color: Colors.TitleText,
    fontWeight: '400',
    fontSize: 14,
    marginTop: 20,
  },
});

export default Style;
