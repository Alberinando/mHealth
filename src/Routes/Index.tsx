import {NavigationContainer} from '@react-navigation/native';
import {StackRoutes} from './Router.Stack'; // Importa as rotas da aplicação quando o usuário está autenticado
import AuthRoutes from './Router.Auth'; // Importa as rotas da aplicação quando o usuário não está autenticado
import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {ActivityIndicator, View} from 'react-native';
import Colors from '../Theme/Colors';
import Style from './Style';
import {useAuth} from '../Context/Auth';

export function Routes() {
  const {Auth, initializing, setInitializing, setUser} = useAuth();
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    });
    return () => unsubscribe();
  }, [initializing, setInitializing, setUser]);

  if (initializing) {
    return (
      <View style={Style.loading}>
        <ActivityIndicator color={Colors.TextmHealt2} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* Renderiza as rotas apropriadas com base no estado de autenticação do usuário */}
      {Auth ? <StackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}

export default Routes;
