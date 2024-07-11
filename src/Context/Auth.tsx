// AuthContext.tsx
import {createContext, useContext, ReactNode, useState} from 'react';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import React from 'react';

// Defina o tipo para o contexto
type AuthContextType = {
  initializing: boolean;
  Auth: FirebaseAuthTypes.User | null;
  setInitializing: (value: boolean) => void;
  setUser: (user: FirebaseAuthTypes.User | null) => void;
};

// Crie o contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Crie um provedor para o contexto
export function AuthProvider({children}: {children: ReactNode}) {
  const [initializing, setInitializing] = useState(true);
  const [Auth, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  return (
    <AuthContext.Provider
      value={{initializing, Auth, setInitializing, setUser}}>
      {children}
    </AuthContext.Provider>
  );
}

// Crie um hook para usar o contexto em outros componentes
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
}
